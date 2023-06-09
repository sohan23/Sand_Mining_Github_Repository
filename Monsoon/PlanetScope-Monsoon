/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-sohan-23/assets/New-Polygon-Area"),
    image = ee.Image("projects/ee-sohan-23/assets/Composite_2016-Monsoon_Planet"),
    image2 = ee.Image("projects/ee-sohan-23/assets/Composite_2017-Monsoon_Planet"),
    image3 = ee.Image("projects/ee-sohan-23/assets/Composite_2018-Monsoon_Planet"),
    image4 = ee.Image("projects/ee-sohan-23/assets/Composite_2019-Monsoon_Planet"),
    image5 = ee.Image("projects/ee-sohan-23/assets/Composite_2020-Monsoon_Planet");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var geometry = table.geometry()

var gColl = ee.FeatureCollection(geometry);

print('New Feature Collection', gColl)

Map.addLayer(gColl)

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
