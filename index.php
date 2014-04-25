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
        <script src="formats.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <div id="screen">
            <div id="edit-player">
                <h2>Your own info</h2>
                
                <table>
                    <tr>
                        <td><label for="edit-player-name">Name</label></td>
                        <td><input type="text" id="edit-player-name" name="edit-player-name" class="player-info" /></td>
                    </tr>
                    <tr>
                        <td><label for="edit-player-id">Player ID</label></td>
                        <td><input type="text" id="edit-player-id" name="edit-player-id" class="player-info" /></td>
                    </tr>
                    <tr>
                        <td><label for="edit-player-division">Age division</label></td>
                        <td>
                            <select id="edit-player-division" name="edit-player-division">
                                <option value="Master">Master</option>
                                <option value="Senior">Senior</option>
                                <option value="Junior">Junior</option>
                            </select>
                        </td>
                    </tr>
                </table>
                
            </div>
            <div id="edit-teamlist">
                <h2>Your team list</h2>
                <label for="format">Format:</label>
                <select id="format" name="format"></select>
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
                <button id="totext">Save</button>
                <button id="fromtext-open">Load</button>
                <br />
                <div id="textloader-container" class="hide">
                    <textarea id="textloader" rows="6"></textarea>
                    <br />
                    <button id="text-close">Close window</button>
                    <button id="fromtext">Load team</button>
                </div>
            </div>
            <div id="edit-details" class="hide">
                <h2>Edit your Pokémon here</h2>
                <input type="hidden" id="teamslot" value="0" />
                <table>
                    <tr>
                        <td class="head-cell" colspan="3">
                            <label for="edit-species">Pokémon</label>
                        </td>
                        <td id="editcell-species" colspan="9">
                            <select id="edit-species" name="edit-species">
                                <?php for ($i = 1; $i < count($Pokemon); ++$i) { ?>
                                <option value="<?= $i ?>"><?= $Pokemon[$i] ?></option>
                                <?php } ?>
                            </select>
                        </td>
                        <td id="editcell-forme-label" colspan="2" class="hide head-cell">
                            <label for="edit-forme">Forme</label>
                        </td>
                        <td id="editcell-forme" colspan="4" class="hide">
                            <select id="edit-forme" name="edit-forme">
                                <option class="hide" value="regular"></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="head-cell" colspan="3">
                            <label for="edit-nickname">Nickname</label>
                        </td>
                        <td colspan="9">
                            <input type="text" id="edit-nickname" name="edit-nickname" />
                        </td>
                    </tr>
                    <tr>
                        <td class="head-cell" colspan="2">
                            <label for="edit-level">Level</label>
                        </td>
                        <td colspan="4">
                            <input type="number" id="edit-level" name="edit-level" min="1" max="100" value="50" />
                        </td>
                        <td class="head-cell" colspan="2">
                            <label for="edit-item">Item</label>
                        </td>
                        <td colspan="4">
                            <input type="text" id="edit-item" name="edit-item" />
                        </td>
                    </tr>
                    <tr>
                        <td class="head-cell" colspan="2">
                            <label for="edit-nature">Nature</label>
                        </td>
                        <td colspan="4">
                            <select id="edit-nature" name="edit-nature">
                                <?php for ($i = 0; $i < count($Nature); ++$i) { ?>
                                <option value="<?= $Nature[$i] ?>"><?= $Nature[$i] ?></option>
                                <?php } ?>
                            </select>
                        </td>
                        <td class="head-cell" colspan="2">
                            <label for="edit-ability">Ability</label>
                        </td>
                        <td colspan="4">
                            <select id="edit-ability" name="edit-ability">
                                <option value="None">&lt;Select Pokémon&gt;</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-hp" class="strong">HP</label></td>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-atk" class="strong">Attack</label></td>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-def" class="strong">Defense</label></td>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-spa" class="strong">Sp. Atk</label></td>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-spd" class="strong">Sp. Def</label></td>
                        <td class="stat-col stat-head" colspan="2"><label for="edit-spe" class="strong">Speed</label></td>
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
                        <td colspan="12" class="moves-head strong">Moves</td>
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
                    <td class="strong left head">Name</td>
                    <td id="print-player-name" class="left"></td>
                </tr>
                <tr>
                    <td class="strong left head">Player ID</td>
                    <td id="print-player-id" class="left"></td>
                </tr>
                <tr>
                    <td class="strong left head">Age division</td>
                    <td id="print-player-division" class="left">Master</td>
                </tr>
            </table>
            <img id="logo" src="logo.jpg" />
            <div class="clearfloat"></div>
            <?php for ($i=1; $i<=6; ++$i) { ?>
            <div class="table-container <?php if ($i%2 == 0) { ?>even<?php } else {?>odd<?php } ?>"data-index="<?= $i ?>">
                <table class="print-table" data-index="<?= $i ?>">
                    <tr>
                        <td class="cell-whole left" colspan="6">Pokémon: <span class="print-species"></span> <span class="print-forme"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-whole left" colspan="6">Nickname: <span class="print-nickname"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-third left" colspan="2">Level: <span class="print-level">50</span></td>
                        <td class="cell-twothird left" colspan="4">Item: <span class="print-item"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-third left" colspan="2">Nature: <span class="print-nature"></span></td>
                        <td class="cell-twothird left" colspan="4">Ability: <span class="print-ability"></span></td>
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
                        <td class="print-hp center half-top"></td>
                        <td class="print-atk center half-top"></td>
                        <td class="print-def center half-top"></td>
                        <td class="print-spa center half-top"></td>
                        <td class="print-spd center half-top"></td>
                        <td class="print-spe center half-top"></td>
                    </tr>
                    <tr>
                        <td class="cell-whole strong center half-bottom" colspan="6">Moves</td>
                    </tr>
                    <tr>
                        <td class="cell-half center half-top half-bottom half-right" colspan="3"><span class="print-move1"></span></td>
                        <td class="cell-half center half-top half-bottom half-left" colspan="3"><span class="print-move2"></span></td>
                    </tr>
                    <tr>
                        <td class="cell-half center half-top half-right" colspan="3"><span class="print-move3"></span></td>
                        <td class="cell-half center half-top half-left" colspan="3"><span class="print-move4"></span></td>
                    </tr>
                </table>
                <span class="print-validate"></span>
            </div>
            <?php } ?>
        </div>
    </body>
</html>