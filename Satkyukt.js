/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-sohan-23/assets/New-Polygon-Area"),
    image = ee.Image("projects/ee-sohan-23/assets/Composite_2017-PreMonsoon_Planet"),
    image2 = ee.Image("projects/ee-sohan-23/assets/Composite_2018-PreMonsoon_Planet"),
    image3 = ee.Image("projects/ee-sohan-23/assets/Composite_2019-PreMonsoon_Planet"),
    image4 = ee.Image("projects/ee-sohan-23/assets/Composite_2020-PreMonsoon_Planet");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-sohan-23/assets/New-Polygon-Area"),
    image = ee.Image("projects/ee-sohan-23/assets/Composite_2016-Monsoon_Planet"),
    image2 = ee.Image("projects/ee-sohan-23/assets/Composite_2017-Monsoon_Planet"),
    image3 = ee.Image("projects/ee-sohan-23/assets/Composite_2018-Monsoon_Planet"),
    image4 = ee.Image("projects/ee-sohan-23/assets/Composite_2019-Monsoon_Planet"),
    image5 = ee.Image("projects/ee-sohan-23/assets/Composite_2020-Monsoon_Planet");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-sohan-23/assets/New-Polygon-Area"),
    image = ee.Image("projects/ee-sohan-23/assets/Composite_2016-PostMonsoon_Planet"),
    image2 = ee.Image("projects/ee-sohan-23/assets/Composite_2017-PostMonsoon_Planet"),
    image3 = ee.Image("projects/ee-sohan-23/assets/Composite_2018-PostMonsoon_Planet"),
    image4 = ee.Image("projects/ee-sohan-23/assets/Composite_2019-PostMonsoon_Panet"),
    image5 = ee.Image("projects/ee-sohan-23/assets/Composite_2020-PostMonsoon_Planet");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var geometry = table.geometry()

var gColl = ee.FeatureCollection(geometry);

print('New Feature Collection', gColl)

Map.addLayer(gColl)

// creating Masked images based on the given geometry and adding them to the map
var Masked_2017_Premonsoon = image.clip(gColl);
Map.addLayer(Masked_2017_Premonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2017-Premonsoon');

var Masked_2018_Premonsoon = image2.clip(gColl);
Map.addLayer(Masked_2018_Premonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2018-Premonsoon');

var Masked_2019_Premonsoon = image3.clip(gColl);
Map.addLayer(Masked_2019_Premonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2019-Premonsoon');

var Masked_2020_Premonsoon = image4.clip(gColl);
Map.addLayer(Masked_2020_Premonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2020-Premonsoon');

// Export the masked images to the drive
Export.image.toDrive({
    image: Masked_2017_Premonsoon,
    description: 'Masked_2017_Premonsoon',
    scale: 3,
    folder: 'Premonsoon',
    maxPixels:1e13,
    region: gColl
});

Export.image.toDrive({
    image: Masked_2018_Premonsoon,
    description: 'Masked_2018_Premonsoon',
    folder: 'Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

Export.image.toDrive({
    image: Masked_2019_Premonsoon,
    description: 'Masked_2019_Premonsoon',
    folder: 'Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

Export.image.toDrive({
    image: Masked_2020_Premonsoon,
    description: 'Masked_2020_Premonsoon',
    folder: 'Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

// Perform Unsupervised Classification
// Create Training Dataset
var train_2017_Premonsoon = Masked_2017_Premonsoon.sample({ 
    region: gColl,
    scale: 3,
    numPixels: 9000
});

var train_2018_Premonsoon = Masked_2018_Premonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
});

var train_2019_Premonsoon = Masked_2019_Premonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
});

var train_2020_Premonsoon = Masked_2020_Premonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer_2017_Premonsoon = ee.Clusterer.wekaKMeans(18).train(train_2017_Premonsoon);

var clusterer_2018_Premonsoon = ee.Clusterer.wekaKMeans(18).train(train_2018_Premonsoon);

var clusterer_2019_Premonsoon = ee.Clusterer.wekaKMeans(18).train(train_2019_Premonsoon);

var clusterer_2020_Premonsoon = ee.Clusterer.wekaKMeans(18).train(train_2020_Premonsoon);

// Cluster the input using the trained clusterer.
var result_2017_Premonsoon = Masked_2017_Premonsoon.cluster(clusterer_2017_Premonsoon);

var result_2018_Premonsoon = Masked_2018_Premonsoon.cluster(clusterer_2018_Premonsoon);

var result_2019_Premonsoon = Masked_2019_Premonsoon.cluster(clusterer_2019_Premonsoon);

var result_2020_Premonsoon = Masked_2020_Premonsoon.cluster(clusterer_2020_Premonsoon);

// Display the clusters with random colors.
Map.addLayer(result_2017_Premonsoon.randomVisualizer(), {}, '2017-Premonsoon');

Map.addLayer(result_2018_Premonsoon.randomVisualizer(), {}, '2018-Premonsoon');

Map.addLayer(result_2019_Premonsoon.randomVisualizer(), {}, '2019-Premonsoon');

Map.addLayer(result_2020_Premonsoon.randomVisualizer(), {}, '2020-Premonsoon');

// Exporting the classified images
Export.image.toDrive({
    image: result_2017_Premonsoon,
    description: 'UC_2017_Premonsoon',
    folder: 'UC-Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

Export.image.toDrive({
    image: result_2018_Premonsoon,
    description: 'UC_2018_Premonsoon',
    folder: 'UC-Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

Export.image.toDrive({
    image: result_2019_Premonsoon,
    description: 'UC_2019_Premonsoon',
    folder: 'UC-Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

Export.image.toDrive({
    image: result_2020_Premonsoon,
    description: 'UC_2020_Premonsoon',
    folder: 'UC-Premonsoon',
    maxPixels:1e13,
    scale: 3,
    region: gColl
});

// creating Masked images based on the given geometry and adding them to the map
var Masked_2016_Monsoon = image.clip(gColl);
Map.addLayer(Masked_2016_Monsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2016-Monsoon');

var Masked_2017_Monsoon = image2.clip(gColl);
Map.addLayer(Masked_2017_Monsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2017-Monsoon');

var Masked_2018_Monsoon = image3.clip(gColl);
Map.addLayer(Masked_2018_Monsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2018-Monsoon');

var Masked_2019_Monsoon = image4.clip(gColl);
Map.addLayer(Masked_2019_Monsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2019-Monsoon');

var Masked_2020_Monsoon = image5.clip(gColl);
Map.addLayer(Masked_2019_Monsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2020-Monsoon');

// Export the masked images to the drive   
Export.image.toDrive({
    image: Masked_2016_Monsoon,
    description: 'Masked_2016_Monsoon',
    folder: 'Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2017_Monsoon,
    description: 'Masked_2017_Monsoon',
    folder: 'Monsoon',
    maxPixels:1e18,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2018_Monsoon,
    description: 'Masked_2018_Monsoon',
    folder: 'Monsoon',
    maxPixels:1e18,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2019_Monsoon,
    description: 'Masked_2019_Monsoon',
    folder: 'Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2020_Monsoon,
    description: 'Masked_2020_Monsoon',
    folder: 'Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

// Perform Unsupervised Classification
// Create Training Datasets
var train_2016_Monsoon = Masked_2016_Monsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2017_Monsoon = Masked_2017_Monsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2018_Monsoon = Masked_2018_Monsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2019_Monsoon = Masked_2019_Monsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2020_Monsoon = Masked_2020_Monsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

// Instantiate the clusterer and train it.
var clusterer_2016_Monsoon = ee.Clusterer.wekaKMeans(18).train(train_2016_Monsoon);

var clusterer_2017_Monsoon = ee.Clusterer.wekaKMeans(18).train(train_2017_Monsoon);

var clusterer_2018_Monsoon = ee.Clusterer.wekaKMeans(18).train(train_2018_Monsoon);

var clusterer_2019_Monsoon = ee.Clusterer.wekaKMeans(18).train(train_2019_Monsoon);

var clusterer_2020_Monsoon = ee.Clusterer.wekaKMeans(18).train(train_2020_Monsoon);

// Cluster the input using the trained clusterer.
var result_2016_Monsoon = Masked_2016_Monsoon.cluster(clusterer_2016_Monsoon);

var result_2017_Monsoon = Masked_2017_Monsoon.cluster(clusterer_2017_Monsoon);

var result_2018_Monsoon = Masked_2018_Monsoon.cluster(clusterer_2018_Monsoon);

var result_2019_Monsoon = Masked_2019_Monsoon.cluster(clusterer_2019_Monsoon);

var result_2020_Monsoon = Masked_2020_Monsoon.cluster(clusterer_2020_Monsoon);

// Display the clusters with random colors.
Map.addLayer(result_2016_Monsoon.randomVisualizer(), {}, '2016-Monsoon');

Map.addLayer(result_2017_Monsoon.randomVisualizer(), {}, '2017-Monsoon');

Map.addLayer(result_2018_Monsoon.randomVisualizer(), {}, '2018-Monsoon');

Map.addLayer(result_2019_Monsoon.randomVisualizer(), {}, '2019-Monsoon');

Map.addLayer(result_2020_Monsoon.randomVisualizer(), {}, '2020-Monsoon');

// Export the Clustered images to the drive
Export.image.toDrive({
    image: result_2016_Monsoon,
    description: 'UC_2016_Monsoon',
    folder: 'UC-Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2017_Monsoon,
    description: 'UC_2017_Monsoon',
    folder: 'UC-Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2018_Monsoon,
    description: 'UC_2018_Monsoon',
    folder: 'UC-Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2019_Monsoon,
    description: 'UC_2019_Monsoon',
    folder: 'UC-Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2020_Monsoon,
    description: 'UC_2020_Monsoon',
    folder: 'UC-Monsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

// creating Masked images based on the given geometry and adding them to the map
var Masked_2016_Postmonsoon = image.clip(gColl);
Map.addLayer(Masked_2016_Postmonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2016-PostMonsoon');

var Masked_2017_Postmonsoon = image2.clip(gColl);
Map.addLayer(Masked_2017_Postmonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2017-PostMonsoon');

var Masked_2018_Postmonsoon = image3.clip(gColl);
Map.addLayer(Masked_2018_Postmonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2018-PostMonsoon');

var Masked_2019_Postmonsoon = image4.clip(gColl);
Map.addLayer(Masked_2019_Postmonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2019-PostMonsoon');

var Masked_2020_Postmonsoon = image5.clip(gColl);
Map.addLayer(Masked_2019_Postmonsoon, {bands: ['b4','b3','b2'], min: 0, max: 0.3}, '2020-PostMonsoon');

// Export the masked images to the drive   
Export.image.toDrive({
    image: Masked_2016_Postmonsoon,
    description: 'Masked_2016_Postmonsoon',
    scale: 3,
    folder: 'PostMonsoon',
    maxPixels:1e13,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2017_Postmonsoon,
    description: 'Masked_2017_Postmonsoon',
    folder: 'PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2018_Postmonsoon,
    description: 'Masked_2018_Postmonsoon',
    folder: 'PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2019_Postmonsoon,
    description: 'Masked_2019_Postmonsoon',
    folder: 'PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: Masked_2020_Postmonsoon,
    description: 'Masked_2020_Postmonsoon',
    folder: 'PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

// Perform Unsupervised Classification
// Create Training Datasets
var train_2016_Postmonsoon = Masked_2016_Postmonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2017_Postmonsoon = Masked_2017_Postmonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2018_Postmonsoon = Masked_2018_Postmonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2019_Postmonsoon = Masked_2019_Postmonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

var train_2020_Postmonsoon = Masked_2020_Postmonsoon.sample({
    region: gColl,
    scale: 3,
    numPixels: 9000
})

// Instantiate the clusterer and train it.
var clusterer_2016_Postmonsoon = ee.Clusterer.wekaKMeans(18).train(train_2016_Postmonsoon);

var clusterer_2017_Postmonsoon = ee.Clusterer.wekaKMeans(18).train(train_2017_Postmonsoon);

var clusterer_2018_Postmonsoon = ee.Clusterer.wekaKMeans(18).train(train_2018_Postmonsoon);

var clusterer_2019_Postmonsoon = ee.Clusterer.wekaKMeans(18).train(train_2019_Postmonsoon);

var clusterer_2020_Postmonsoon = ee.Clusterer.wekaKMeans(18).train(train_2020_Postmonsoon);

// Cluster the input using the trained clusterer.
var result_2016_Postmonsoon = Masked_2016_Postmonsoon.cluster(clusterer_2016_Postmonsoon);

var result_2017_Postmonsoon = Masked_2017_Postmonsoon.cluster(clusterer_2017_Postmonsoon);

var result_2018_Postmonsoon = Masked_2018_Postmonsoon.cluster(clusterer_2018_Postmonsoon);

var result_2019_Postmonsoon = Masked_2019_Postmonsoon.cluster(clusterer_2019_Postmonsoon);

var result_2020_Postmonsoon = Masked_2020_Postmonsoon.cluster(clusterer_2020_Postmonsoon);

// Display the clusters with random colors.
Map.addLayer(result_2016_Postmonsoon.randomVisualizer(), {}, '2016-PostMonsoon');

Map.addLayer(result_2017_Postmonsoon.randomVisualizer(), {}, '2017-PostMonsoon');

Map.addLayer(result_2018_Postmonsoon.randomVisualizer(), {}, '2018-PostMonsoon');

Map.addLayer(result_2019_Postmonsoon.randomVisualizer(), {}, '2019-PostMonsoon');

Map.addLayer(result_2020_Postmonsoon.randomVisualizer(), {}, '2020-PostMonsoon');

// Export the Clustered images to the drive
Export.image.toDrive({
    image: result_2016_Postmonsoon,
    description: 'UC_2016_Postmonsoon',
    folder: 'UC-PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2017_Postmonsoon,
    description: 'UC_2017_Postmonsoon',
    folder: 'UC-PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2018_Postmonsoon,
    description: 'UC_2018_Postmonsoon',
    folder: 'UC-PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2019_Postmonsoon,
    description: 'UC_2019_Postmonsoon',
    folder: 'UC-PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});

Export.image.toDrive({
    image: result_2020_Postmonsoon,
    description: 'UC_2020_Postmonsoon',
    folder: 'UC-PostMonsoon',
    maxPixels:1e13,
    scale: 3,
    region: geometry
});