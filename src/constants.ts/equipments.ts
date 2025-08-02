import blender from '../jsons/equipments/appliances/blender.json';
import microwave from '../jsons/equipments/appliances/microwave.json';
import oven from '../jsons/equipments/appliances/oven.json';
import cutBoard from '../jsons/equipments/cut-board.json';
import bakingTray from '../jsons/equipments/dishes/baking-tray.json';
import bowl from '../jsons/equipments/dishes/bowl.json';
import colander from '../jsons/equipments/dishes/colander.json';
import lid from '../jsons/equipments/dishes/lid.json';
import pan from '../jsons/equipments/dishes/pan.json';
import plate from '../jsons/equipments/dishes/plate.json';
import pot from '../jsons/equipments/dishes/pot.json';
import fork from '../jsons/equipments/fork.json';
import grater from '../jsons/equipments/grater.json';
import grill from '../jsons/equipments/grill.json';
import knife from '../jsons/equipments/knife.json';
import measuringSpoon from '../jsons/equipments/measuring-spoon.json';
import paperTowel from '../jsons/equipments/paper-towel.json';
import pastryBrush from '../jsons/equipments/pastry-brush.json';
import skewers from '../jsons/equipments/skewers.json';
import spatula from '../jsons/equipments/spatula.json';
import spoon from '../jsons/equipments/spoon.json';
import tongs from '../jsons/equipments/tongs.json';
import whisk from '../jsons/equipments/whisk.json';

const APPLIANCES = {
  microwave,
  blender,
  oven,
};

const DISHES = {
  pan,
  bowl,
  plate,
  pot,
  colander,
  bakingTray,
  lid,
};

export const EQUIPMENTS = {
  ...APPLIANCES,
  ...DISHES,
  spatula,
  whisk,
  fork,
  knife,
  grater,
  pastryBrush,
  cutBoard,
  spoon,
  measuringSpoon,
  grill,
  tongs,
  paperTowel,
  skewers,
};
