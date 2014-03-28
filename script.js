(function($) {
    
    function show_forme() {
        $("#editcell-species").attr("colspan", 6)
        $("#editcell-forme").removeClass("hide")
    }
    
    function hide_forme() {
        $("#editcell-species").attr("colspan", 12)
        $("#editcell-forme").addClass("hide")
        $("#edit-forme").val("regular")
        $("#edit-forme option").not(":selected").remove()
    }
    
    function recheck_ability() {
        var number = Number($("#edit-species").val())
        var forme = $("#edit-forme").val()
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
        $("#edit-nickname").val(nickname)
        $("#edit-forme").val(forme)
        $("#edit-level").val(level)
        $("#edit-item").val(item)
        $("#edit-nature").val(nature)
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
        var number = $("#edit-species").val()
        var forme = $("#edit-forme").val()
        if (forme == "regular") { forme = "" }
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
        console.log("moo")
        var name = $("#edit-player-name").val()
        var id = $("#edit-player-id").val()
        var division = $("#edit-player-division").val()
        $("#print-player-name").text(name)
        $("#print-player-id").text(id)
        $("#print-player-division").text(division)
    }
    
    $(document).ready(function() {
        $(".editlist-editbutton").click(edit_click)
        $("#edit-submit").click(update_click)
        $("#edit-species").change(species_change)
        $("#edit-forme").change(forme_change)
        $("#edit-item").keyup(item_change)
        $(".player-info").keyup(player_info_change)
        $("#edit-player-division").change(player_info_change)
    })
})(jQuery)