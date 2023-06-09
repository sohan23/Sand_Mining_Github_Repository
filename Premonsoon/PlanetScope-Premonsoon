/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-sohan-23/assets/New-Polygon-Area"),
    image = ee.Image("projects/ee-sohan-23/assets/Composite_2017-PreMonsoon_Planet"),
    image2 = ee.Image("projects/ee-sohan-23/assets/Composite_2018-PreMonsoon_Planet"),
    image3 = ee.Image("projects/ee-sohan-23/assets/Composite_2019-PreMonsoon_Planet"),
    image4 = ee.Image("projects/ee-sohan-23/assets/Composite_2020-PreMonsoon_Planet");
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