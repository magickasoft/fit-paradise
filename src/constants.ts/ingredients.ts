import flour from '../jsons/ingredients/bakery/flour.json'
import lavash from '../jsons/ingredients/bakery/lavash.json'
import whiteBread from '../jsons/ingredients/bakery/white-bread.json'
import yeast from '../jsons/ingredients/bakery/yeast.json'
import fetaCheese from '../jsons/ingredients/cheese/feta-cheese.json'
import hardCheese from '../jsons/ingredients/cheese/hard-cheese.json'
import eggs from '../jsons/ingredients/eggs/eggs.json'
import arugula from '../jsons/ingredients/grean/arugula.json'
import basil from '../jsons/ingredients/grean/basil.json'
import cilantro from '../jsons/ingredients/grean/cilantro.json'
import dill from '../jsons/ingredients/grean/dill.json'
import greenOnion from '../jsons/ingredients/grean/green-onion.json'
import greens from '../jsons/ingredients/grean/greens.json'
import parsley from '../jsons/ingredients/grean/parsley.json'
import spinach from '../jsons/ingredients/grean/spinach.json'
import breadKvass from '../jsons/ingredients/liquid/bread-kvass.json'
import carbonatedMineralWater from '../jsons/ingredients/liquid/carbonated-mineral-water.json'
import cream20 from '../jsons/ingredients/liquid/cream-20.json'
import hotWater from '../jsons/ingredients/liquid/hot-water.json'
import kefir from '../jsons/ingredients/liquid/kefir.json'
import kefir32 from '../jsons/ingredients/liquid/kefir-32.json'
import lemonJuice from '../jsons/ingredients/liquid/lemon-juice.json'
import milk from '../jsons/ingredients/liquid/milk.json'
import sourCream from '../jsons/ingredients/liquid/sour-cream.json'
import vinegar from '../jsons/ingredients/liquid/vinegar.json'
import water from '../jsons/ingredients/liquid/water.json'
import yogurt from '../jsons/ingredients/liquid/yogurt.json'
import boiledPorkSausage from '../jsons/ingredients/meat/boiled-pork-sausage.json'
import boiledSausage from '../jsons/ingredients/meat/boiled-sausage.json'
import chickenBreast from '../jsons/ingredients/meat/chicken-breast.json'
import chickenThighFillet from '../jsons/ingredients/meat/chicken-thigh-fillet.json'
import porkNeck from '../jsons/ingredients/meat/pork-neck.json'
import butter from '../jsons/ingredients/oil/butter.json'
import meltedButter from '../jsons/ingredients/oil/melted-butter.json'
import oliveOil from '../jsons/ingredients/oil/olive-oil.json'
import refinedVegetableOil from '../jsons/ingredients/oil/refined-vegetable-oil.json'
import vegetableOil from '../jsons/ingredients/oil/vegetable-oil.json'
import mustard from '../jsons/ingredients/sauce/mustard.json'
import bayLeaf from '../jsons/ingredients/seasoning/bay-leaf.json'
import groundBlackPepper from '../jsons/ingredients/seasoning/ground-black-pepper.json'
import oreganoDry from '../jsons/ingredients/seasoning/oregano-dry.json'
import salt from '../jsons/ingredients/seasoning/salt.json'
import sugar from '../jsons/ingredients/seasoning/sugar.json'
import sesameSeeds from '../jsons/ingredients/seeds/sesame-seeds.json'
import beet from '../jsons/ingredients/vegetables/beet.json'
import bellPepper from '../jsons/ingredients/vegetables/bell-pepper.json'
import broccoli from '../jsons/ingredients/vegetables/broccoli.json'
import cabbage from '../jsons/ingredients/vegetables/cabbage.json'
import carrot from '../jsons/ingredients/vegetables/carrot.json'
import cucumber from '../jsons/ingredients/vegetables/cucumber.json'
import garlic from '../jsons/ingredients/vegetables/garlic.json'
import olives from '../jsons/ingredients/vegetables/olives.json'
import onion from '../jsons/ingredients/vegetables/onion.json'
import potato from '../jsons/ingredients/vegetables/potato.json'
import radish from '../jsons/ingredients/vegetables/radish.json'
import redOnion from '../jsons/ingredients/vegetables/red-onion.json'
import tomato from '../jsons/ingredients/vegetables/tomato.json'
import zucchini from '../jsons/ingredients/vegetables/zucchini.json'
import bakingPowder from '../jsons/ingredients/bakery/baking-powder.json'
import oatmeal from '../jsons/ingredients/cereals/oatmeal.json'
import soda from '../jsons/ingredients/seasoning/soda.json'

const MEAT = {
  porkNeck,
  chickenThighFillet,
  chickenBreast,
  boiledSausage,
  boiledPorkSausage,
}

const GREANS = {
  greens,
  dill,
  parsley,
  basil,
  cilantro,
  greenOnion,
  spinach,
  arugula,
}

const VEGATABLES = {
  tomato,
  cucumber,
  bellPepper,
  zucchini,
  beet,
  carrot,
  onion,
  radish,
  redOnion,
  potato,
  garlic,
  cabbage,
  broccoli,
  olives,
}

const LIQUIDS = {
  water,
  hotWater,
  carbonatedMineralWater,
  lemonJuice,
  milk,
  kefir,
  yogurt,
  sourCream,
  cream20,
  breadKvass,
  vinegar,
  kefir32,
}

const SAUCES = {
  mustard,
}

const OILS = {
  butter,
  meltedButter,
  refinedVegetableOil,
  vegetableOil,
  oliveOil,
}

const BAKERY = {
  whiteBread,
  lavash,
  flour,
  yeast,
  bakingPowder,
}

const CHEESE = {
  fetaCheese,
  hardCheese,
}

const SEASONING = {
  oreganoDry,
  groundBlackPepper,
  salt,
  sugar,
  bayLeaf,
  soda,
}

const SEEDS = {
  sesameSeeds,
}

const EGGS = {
  eggs,
}

const CEREALS = {
  oatmeal,
}

export const INGREDIENTS = {
  ...MEAT,
  ...GREANS,
  ...VEGATABLES,
  ...LIQUIDS,
  ...SAUCES,
  ...OILS,
  ...BAKERY,
  ...CHEESE,
  ...SEASONING,
  ...SEEDS,
  ...EGGS,
  ...CEREALS,
}
