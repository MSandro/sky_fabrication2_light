////////////////////////
/// Made by MSandro  ///
////////////////////////

onEvent('recipes', event => {
  // AETHER
  event.remove({output: 'the_aether:wisteria_sign'});

  // SIMPLETECH
  event.remove({output: 'simpletech:sieve'});
  event.remove({output: 'simpletech:sieve_auto'});

  // BLOCKUS
  event.remove({output: 'blockus:oak_small_logs'});
  event.remove({output: 'blockus:charcoal_block'});

  // GOML
  event.remove({output: 'goml:ender_binding'});
  event.remove({output: 'goml:angelic_aura'});
  event.remove({output: 'goml:chaos_zone'});
  event.remove({output: 'goml:heaven_wings'});
  event.remove({output: 'goml:withering_seal'});
  event.remove({output: 'goml:village_core'});
  event.remove({output: 'goml:lake_spirit_grace'});

  // MC
  event.remove({output: 'minecraft:end_portal_frame'});
  event.remove({output: 'minecraft:elytra'});
  event.remove({output: 'minecraft:seed', type: 'minecraft:crafting_shapeless'})

  event.remove({output: 'skyutils:crucible'});
  event.remove({output: 'skyutils:lava_crucible'});
  event.remove({output: 'skyutils:water_crucible'});
  event.remove({output: 'modern_industrialization:bronze_dust', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:bronze_tiny_dust', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:gold_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:gold_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:aluminum_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:aluminum_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:bronze_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:bronze_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:copper_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:copper_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:stainless_steel_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:stainless_steel_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:steel_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:steel_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:titanium_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:titanium_drill_head', type: 'minecraft:crafting_shaped'})

  event.remove({output: 'minecraft:end_crystal'});
  event.shaped('1x minecraft:end_crystal', [
    'GGG',
    'GCG',
    'GIG'
  ], {
    I: 'minecraft:ghast_tear',
    G: 'minecraft:glass',
    C: 'wirelessnetworks:entangled_capacitor'
  });

  event.shapeless('9x minecraft:charcoal', ['skyutils:charcoal_block'])

  event.remove({output: 'expandedstorage:old_wood_chest'});
  event.shapeless('expandedstorage:old_wood_chest', [['minecraft:chest'], ['blockus:legacy_planks']]);
})
