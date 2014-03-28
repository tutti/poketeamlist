<?php
require "pokemon.php";
require "data.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <style>
            body > div {
                display: none;
            }
        </style>
        <link rel="stylesheet" href="screen.css" />
        <link rel="stylesheet" href="print.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="pokemon.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <div id="screen">
            <div id="edit-player">
                <h2>Your own info</h2>
                
                <label for="edit-player-name">Name</label>
                <input type="text" id="edit-player-name" name="edit-player-name" class="player-info" />
                <br />
                
                <label for="edit-player-id">Player ID</label>
                <input type="text" id="edit-player-id" name="edit-player-id" class="player-info" />
                <br />
                
                <label for="edit-player-division">Age division</label>
                <select id="edit-player-division" name="edit-player-division">
                    <option value="Master">Master</option>
                    <option value="Senior">Senior</option>
                    <option value="Junior">Junior</option>
                </select>
                <br />
            </div>
            <div id="edit-teamlist">
                <h2>Your team list</h2>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Ability</th>
                        <th>&nbsp;</th>
                    </tr>
                    <?php for ($i = 1; $i <= 6; ++$i) { ?>
                    <tr data-index="<?= $i ?>">
                        <td class="editlist-number"></td>
                        <td class="editlist-nameforme">
                            <span class="editlist-name"></span>
                            <span class="editlist-forme"></span>
                        </td>
                        <td class="editlist-ability"></td>
                        <td><button class="editlist-editbutton" data-index="<?= $i ?>">Edit</button></td>
                    </tr>
                    <?php } ?>
                </table>
            </div>
            <div id="edit-details" class="hide">
                <h2>Edit your Pokémon here</h2>
                <input type="hidden" id="teamslot" value="0" />
                <table>
                    <tr>
                        <td id="editcell-species" colspan="12">
                            <label for="edit-species">Pokémon</label>
                            <select id="edit-species" name="edit-species">
                                <?php for ($i = 1; $i < count($Pokemon); ++$i) { ?>
                                <option value="<?= $i ?>"><?= $Pokemon[$i] ?></option>
                                <?php } ?>
                            </select>
                        </td>
                        <td id="editcell-forme" colspan="6" class="hide">
                            <label for="edit-forme">Forme</label>
                            <select id="edit-forme" name="edit-forme">
                                <option class="hide" value="regular"></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="12">
                            <label for="edit-nickname">Nickname</label>
                            <input type="text" id="edit-nickname" name="edit-nickname" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            <label for="edit-level">Level</label>
                            <input type="number" id="edit-level" name="edit-level" min="1" max="100" value="50" />
                        </td>
                        <td colspan="7">
                            <label for="edit-item">Item</label>
                            <input type="text" id="edit-item" name="edit-item" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            <label for="edit-nature">Nature</label>
                            <select id="edit-nature" name="edit-nature">
                                <?php for ($i = 0; $i < count($Nature); ++$i) { ?>
                                <option value="<?= $Nature[$i] ?>"><?= $Nature[$i] ?></option>
                                <?php } ?>
                            </select>
                        </td>
                        <td colspan="7">
                            <label for="edit-ability">Ability</label>
                            <select id="edit-ability" name="edit-ability">
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="stat-col" colspan="2"><label for="edit-hp" class="strong">HP</label></td>
                        <td class="stat-col" colspan="2"><label for="edit-atk" class="strong">Attack</label></td>
                        <td class="stat-col" colspan="2"><label for="edit-def" class="strong">Defense</label></td>
                        <td class="stat-col" colspan="2"><label for="edit-spa" class="strong">Sp. Atk</label></td>
                        <td class="stat-col" colspan="2"><label for="edit-spd" class="strong">Sp. Def</label></td>
                        <td class="stat-col" colspan="2"><label for="edit-spe" class="strong">Speed</label></td>
                    </tr>
                    <tr>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-hp" name="edit-hp" /></td>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-atk" name="edit-atk" /></td>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-def" name="edit-def" /></td>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-spa" name="edit-spa" /></td>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-spd" name="edit-spd" /></td>
                        <td class="stat-col" colspan="2"><input type="number" id="edit-spe" name="edit-spe" /></td>
                    </tr>
                    <tr>
                        <td colspan="12" class="strong">Moves</td>
                    </tr>
                    <tr>
                        <?php for ($i = 1; $i <= 4; ++$i) { ?>
                        <td class="move-col" colspan="3"><input type="text" class="edit-move" id="edit-move<?= $i ?>" name="edit-move<?= $i ?>" /></td>
                        <?php } ?>
                    </tr>
                    <tr>
                        <td colspan="12">
                            <button id="edit-submit">Update</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="print">
            <table class="print-player-info">
                <tr>
                    <td class="strong left">Name</td>
                    <td id="print-player-name"></td>
                </tr>
                <tr>
                    <td class="strong left">Player ID</td>
                    <td id="print-player-id"></td>
                </tr>
                <tr>
                    <td class="strong left">Age division</td>
                    <td id="print-player-division">Master</td>
                </tr>
            </table>
            <?php for ($i=1; $i<=6; ++$i) { ?>
            <div class="table-container <?php if ($i%2 == 0) { ?>even<?php } else {?>odd<?php } ?>">
                <table class="print-table" data-index="<?= $i ?>">
                    <tr>
                        <td class="cell-whole" colspan="6">Pokémon: <span class="print-species"></span> <span class="print-forme"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-whole" colspan="6">Nickname: <span class="print-nickname"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-third" colspan="2">Level: <span class="print-level"></span></td>
                        <td class="cell-twothird" colspan="4">Item: <span class="print-item"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-third" colspan="2">Nature: <span class="print-nature"></span></td>
                        <td class="cell-twothird" colspan="4">Ability: <span class="print-ability"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-sixth strong center half-bottom">HP</td>
                        <td class="cell-sixth strong center half-bottom">Atk</td>
                        <td class="cell-sixth strong center half-bottom">Def</td>
                        <td class="cell-sixth strong center half-bottom">SpA</td>
                        <td class="cell-sixth strong center half-bottom">SpD</td>
                        <td class="cell-sixth strong center half-bottom">Spe</td>
                    </tr>
                    <tr>
                        <td class="print-hp half-top">&nbsp;</td>
                        <td class="print-atk half-top">&nbsp;</td>
                        <td class="print-def half-top">&nbsp;</td>
                        <td class="print-spa half-top">&nbsp;</td>
                        <td class="print-spd half-top">&nbsp;</td>
                        <td class="print-spe half-top">&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="cell-whole strong center half-bottom" colspan="6">Moves</td>
                    </tr>
                    <tr>
                        <td class="cell-half half-top half-bottom half-right" colspan="3"><span class="print-move1"></span></td>
                        <td class="cell-half half-top half-bottom half-left" colspan="3"><span class="print-move2"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-half half-top half-right" colspan="3"><span class="print-move3"></span></td>
                        <td class="cell-half half-top half-left" colspan="3"><span class="print-move4"></span></td>
                    </tr>
                </table>
            </div>
            <?php } ?>
        </div>
    </body>
</html>