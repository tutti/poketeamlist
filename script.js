(function($) {
    
    function show_forme() {
        $("#editcell-species").attr("colspan", 3)
        $("#editcell-forme, #editcell-forme-label").removeClass("hide")
    }
    
    function hide_forme() {
        $("#editcell-species").attr("colspan", 9)
        $("#editcell-forme, #editcell-forme-label").addClass("hide")
        $("#edit-forme").val("regular")
        $("#edit-forme option").not(":selected").remove()
    }
    
    function recheck_ability() {
        var number = Number($("#edit-species").val())
        var forme = $("#edit-forme").val()
        if (forme == "" || !forme) { forme = "regular" }
        console.log(forme)
        var abilities = Pokemon[number].formes[forme]
        
        var current = $("#edit-ability").val()
        $("#edit-ability option").remove()
        for (ability in abilities) {
            $("#edit-ability").append($('<option value="' + abilities[ability] + '">' + abilities[ability] + '</option>'))
            if (abilities[ability] == current) {
                $("#edit-ability").val(current)
            }
        }
    }
    
    function recheck_forme() {
        var number = Number($("#edit-species").val())
        
        // Show the Forme list if the Pokémon has them
        var num_formes = Object.keys(Pokemon[number].formes).length
        var current = $("#edit-forme").val()
        hide_forme()
        if (num_formes > 1) {
            show_forme()
            for (forme in Pokemon[number].formes) {
                $("#edit-forme").append($('<option value="' + forme + '">' + forme + '</option>'))
            }
            if (forme == current) {
                $("#edit-forme").val(current)
            } else {
                $('#edit-forme :nth-child(2)').attr("selected", "selected")
            }
            //
        } else {
            hide_forme()
            $('#edit-forme :nth-child(1)').attr("selected", "selected")
        }
    }
    
    function to_text() {
        // Converts the pokémon list to text for saving.
        // The pokémon are separated by newlines, while each section
        // of the pokémon's data is separated by semicolons
        // (dex_number;forme;level;nature;item;ability;stats;moves;nickname).
        // Stats and moves are separated by slashes
        // (hp/atk/def/spa/spd/spe, move/move/move/move).
        var out = ""
        
        for (var i = 1; i <= 6; ++i) {
            var table = $(".print-table[data-index='" + i + "']")
            var editrow = $("tr[data-index='" + i + "']")
            var number = editrow.find(".editlist-number").text()
            var forme = table.find(".print-forme").text()
            if (forme == "") { forme = "NONE" }
            var ability = table.find(".print-ability").text()
            var nickname = table.find(".print-nickname").text()
            var level = table.find(".print-level").text()
            level = Number(level)
            if (level < 1) { level = 1 }
            if (level > 100) { level = 100 }
            var item = table.find(".print-item").text()
            var nature = table.find(".print-nature").text()
            if (!nature) { nature = "Adamant" }
            var hp = table.find(".print-hp").text()
            var atk = table.find(".print-atk").text()
            var def = table.find(".print-def").text()
            var spa = table.find(".print-spa").text()
            var spd = table.find(".print-spd").text()
            var spe = table.find(".print-spe").text()
            var move1 = table.find(".print-move1").text()
            var move2 = table.find(".print-move2").text()
            var move3 = table.find(".print-move3").text()
            var move4 = table.find(".print-move4").text()
            
            // Strip semicolons from item, nickname and moves
            var smr = /;/g
            var slr = /\//g
            item = item.replace(smr, "")
            nickname = nickname.replace(smr, "")
            move1 = move1.replace(smr, "")
            move2 = move2.replace(smr, "")
            move3 = move3.replace(smr, "")
            move4 = move4.replace(smr, "")
            
            // Strip slashes from moves
            move1 = move1.replace(slr, "")
            move2 = move2.replace(slr, "")
            move3 = move3.replace(slr, "")
            move4 = move4.replace(slr, "")
            
            var stats = [hp, atk, def, spa, spd, spe].join("/")
            var moves = [move1, move2, move3, move4].join("/")
            out += [number, forme, level, nature, item, ability, stats, moves, nickname].join(";") + "\n"
        }
        
        return out.slice(0, -1)
    }
    
    function from_text(text) {
        // (dex_number;forme;level;nature;item;ability;stats;moves;nickname).
        var pokemon_list = text.split("\n")
        for (var i = 1; i <= 6; ++i) {
            var table = $(".print-table[data-index='" + i + "']")
            var editrow = $("tr[data-index='" + i + "']")
            var info = pokemon_list[i-1].split(";")
            var name = Pokemon[Number(info[0])].name
            var forme = info[1]
            if (forme == "NONE") { forme = "" }
            var stats = info[6].split("/")
            var moves = info[7].split("/")
            editrow.find(".editlist-number").text(info[0])
            editrow.find(".editlist-name").text(name)
            table.find(".print-species").text(name)
            editrow.find(".editlist-forme").text(forme)
            table.find(".print-forme").text(forme)
            table.find(".print-level").text(info[2])
            table.find(".print-nature").text(info[3])
            table.find(".print-item").text(info[4])
            editrow.find(".editlist-ability").text(info[5])
            table.find(".print-ability").text(info[5])
            table.find(".print-hp").text(stats[0])
            table.find(".print-atk").text(stats[1])
            table.find(".print-def").text(stats[2])
            table.find(".print-spa").text(stats[3])
            table.find(".print-spd").text(stats[4])
            table.find(".print-spe").text(stats[5])
            table.find(".print-move1").text(moves[0])
            table.find(".print-move2").text(moves[1])
            table.find(".print-move3").text(moves[2])
            table.find(".print-move4").text(moves[3])
            table.find(".print-nickname").text(info[8])
        }
        
        $("#edit-details").addClass("hide")
    }
    
    function edit_click(e) {
        // Get data from the edit list
        var index = $(e.currentTarget).attr("data-index")
        var row = $("#edit-teamlist [data-index="+index+"]")
        var number = Number(row.children(".editlist-number").text())
        
        // Get more data from the print table
        var table = $(".table-container [data-index="+index+"]")
        var forme = table.find(".print-forme").text()
        var nickname = table.find(".print-nickname").text()
        var level = Number(table.find(".print-level").text())
        var item = table.find(".print-item").text()
        var nature = table.find(".print-nature").text()
        var ability = table.find(".print-ability").text()
        var hp = table.find(".print-hp").text()
        var atk = table.find(".print-atk").text()
        var def = table.find(".print-def").text()
        var spa = table.find(".print-spa").text()
        var spd = table.find(".print-spd").text()
        var spe = table.find(".print-spe").text()
        var move1 = table.find(".print-move1").text()
        var move2 = table.find(".print-move2").text()
        var move3 = table.find(".print-move3").text()
        var move4 = table.find(".print-move4").text()
        
        // Update the edit table with the data
        $("#edit-species").val(number)
        recheck_forme()
        $("#edit-nickname").val(nickname)
        $("#edit-forme").val(forme)
        $("#edit-level").val(level)
        $("#edit-item").val(item)
        $("#edit-nature").val(nature)
        recheck_ability()
        $("#edit-ability").val(ability)
        $("#edit-hp").val(hp)
        $("#edit-atk").val(atk)
        $("#edit-def").val(def)
        $("#edit-spa").val(spa)
        $("#edit-spd").val(spd)
        $("#edit-spe").val(spe)
        $("#edit-move1").val(move1)
        $("#edit-move2").val(move2)
        $("#edit-move3").val(move3)
        $("#edit-move4").val(move4)
        
        // Insert the index into the update button
        $("#edit-submit").attr("data-index", index)
        
        // Show the edit window
        $("#edit-details").removeClass("hide")
    }
    
    function update_click(e) {
        // Get data from the edit table
        var species = $("#edit-species :selected").text()
        if (species == "") {
            $("#edit-details").addClass("hide")
            return
        }
        var number = $("#edit-species").val()
        var forme = $("#edit-forme").val()
        if (forme == "regular" || forme == "" || forme == null) { forme = "" }
        var ability = $("#edit-ability").val()
        var nickname = $("#edit-nickname").val()
        var level = $("#edit-level").val()
        if (level < 1) { level = 1 }
        if (level > 100) { level = 100 }
        var item = $("#edit-item").val()
        var nature = $("#edit-nature").val()
        if (!nature) { nature = "Adamant" }
        var hp = $("#edit-hp").val()
        var atk = $("#edit-atk").val()
        var def = $("#edit-def").val()
        var spa = $("#edit-spa").val()
        var spd = $("#edit-spd").val()
        var spe = $("#edit-spe").val()
        var move1 = $("#edit-move1").val()
        var move2 = $("#edit-move2").val()
        var move3 = $("#edit-move3").val()
        var move4 = $("#edit-move4").val()
        
        // Update the edit list
        var index = $("#edit-submit").attr("data-index")
        var row = $("#edit-teamlist tr[data-index="+index+"]")
        row.find(".editlist-name").text(species)
        row.find(".editlist-number").text(number)
        if (forme != "regular") {
            row.find(".editlist-forme").text(forme)
        }
        row.find(".editlist-ability").text(ability)
        
        // Update the print table
        var table = $(".table-container [data-index="+index+"]")
        table.find(".print-species").text(species)
        table.find(".print-forme").text(forme)
        table.find(".print-nickname").text(nickname)
        table.find(".print-level").text(level)
        table.find(".print-item").text(item)
        table.find(".print-nature").text(nature)
        table.find(".print-ability").text(ability)
        table.find(".print-hp").text(hp)
        table.find(".print-atk").text(atk)
        table.find(".print-def").text(def)
        table.find(".print-spa").text(spa)
        table.find(".print-spd").text(spd)
        table.find(".print-spe").text(spe)
        table.find(".print-move1").text(move1)
        table.find(".print-move2").text(move2)
        table.find(".print-move3").text(move3)
        table.find(".print-move4").text(move4)
        
        // Hide the edit window
        $("#edit-details").addClass("hide")
    }
    
    function species_change() {
        // Update the list of formes
        recheck_forme()
        
        // Update the list of abilities
        recheck_ability()
    }
    
    function item_change() {
        // If the Pokémon's Forme depends on an item, make sure it's in the right Forme.
        // Currently this is just Giratina (Arceus has no differences that would appear in this form, so it's ignored).
        var pokemon = Number($("#edit-species").val())
        var forme = $("#edit-forme").val()
        var item = $("#edit-item").val()
        
        switch (pokemon) {
            case 487:
                if (item.toLowerCase() == "griseous orb" && forme == "Altered Forme") {
                    $("#edit-forme").val("Origin Forme")
                    forme_change()
                } else if (item.toLowerCase() != "griseous orb" && forme == "Origin Forme") {
                    $("#edit-forme").val("Altered Forme")
                    forme_change()
                }
                break;
        }
    }
    
    function forme_change() {
        // Update the list of abilities
        recheck_ability()
        
        // If the Pokémon's Forme depends on an item, make sure it has the right item.
        // Currently this is just Giratina (Arceus has no differences that would appear in this form, so it's ignored).
        var pokemon = Number($("#edit-species").val())
        var forme = $("#edit-forme").val()
        var item = $("#edit-item").val()
        
        switch (pokemon) {
            case 487:
                if (item.toLowerCase() == "griseous orb" && forme == "Altered Forme") {
                    $("#edit-item").val("")
                    item_change()
                } else if (item.toLowerCase() != "griseous orb" && forme == "Origin Forme") {
                    $("#edit-item").val("Griseous Orb")
                    item_change()
                }
                break;
        }
    }
    
    function player_info_change() {
        var name = $("#edit-player-name").val()
        var id = $("#edit-player-id").val()
        var division = $("#edit-player-division").val()
        $("#print-player-name").text(name)
        $("#print-player-id").text(id)
        $("#print-player-division").text(division)
    }
    
    function save_click() {
        var text = to_text()
        $("#textloader-container").removeClass("hide")
        $("#fromtext").attr("disabled", "disabled")
        $("#textloader").val(text)
    }
    
    function hide_click() {
        $("#textloader-container").addClass("hide")
    }
    
    function load_open_click() {
        $("#textloader-container").removeClass("hide")
        $("#fromtext").attr("disabled", false)
        $("#textloader").val("")
    }
    
    function load_click() {
        var text = $("#textloader").val()
        from_text(text)
        $("#textloader-container").addClass("hide")
    }
    
    $(document).ready(function() {
        $(".editlist-editbutton").click(edit_click)
        $("#edit-submit").click(update_click)
        $("#edit-species").change(species_change)
        $("#edit-forme").change(forme_change)
        $("#edit-item").keyup(item_change)
        $(".player-info").keyup(player_info_change)
        $("#edit-player-division").change(player_info_change)
        $("#totext").click(save_click)
        $("#fromtext-open").click(load_open_click)
        $("#text-close").click(hide_click)
        $("#fromtext").click(load_click)
    })
})(jQuery)