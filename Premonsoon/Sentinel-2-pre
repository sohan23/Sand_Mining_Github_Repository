/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[77.57326723345415, 30.322457621569356],
          [77.55472780474321, 30.32334668380032],
          [77.52245546587602, 30.314752077587706],
          [77.50254274614946, 30.296967740448004],
          [77.48537660845415, 30.281255559264814],
          [77.47301698931352, 30.25783084508528],
          [77.46374727495805, 30.229357848527492],
          [77.4507010103096, 30.20206348771365],
          [77.4290716768135, 30.180400618970072],
          [77.41190553911821, 30.1676380691903],
          [77.38512636431352, 30.143592498717297],
          [77.36212373980179, 30.126371081474346],
          [77.34392763384476, 30.115086454953456],
          [77.32676149614946, 30.102909490878808],
          [77.32813478716508, 30.076174308090916],
          [77.3453009248604, 30.05923828766593],
          [77.35800386675491, 30.04854036066456],
          [77.4070990205635, 30.083898547797293],
          [77.42529512652054, 30.102315454244458],
          [77.44795442827836, 30.120728929394197],
          [77.46237398394243, 30.134982165694623],
          [77.48880983599321, 30.160514066949943],
          [77.5210821748604, 30.19167777543943],
          [77.53859163530961, 30.2127447915642],
          [77.55026460894241, 30.228467934468974],
          [77.56399751909866, 30.245968099099862],
          [77.58116365679398, 30.266726964424056],
          [77.6041662813057, 30.28955664781329],
          [77.59558321245805, 30.314159318334827],
          [77.57738710650102, 30.32097583325371]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var region = geometry;

//for the year 2016
// Load the image collection.
var dataset_17 = ee.ImageCollection('COPERNICUS/S2').filterDate('2016-02-01', '2016-05-31').filterBounds(region);
// Compute the median.
var median_17 = dataset_17.median();

// Select the bands of interest.
var bands_17 = median_17.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_17,
    description: 'Sentinel-premonsoon_2016',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training17 = bands_17.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer17 = ee.Clusterer.wekaKMeans(13).train(training17);

// Cluster the input using the trained clusterer.
var result17 = bands_17.cluster(clusterer17).clip(region);

// Display the clusters with random colors.
Map.addLayer(result17.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2016');
print(result17);

// Exporting UC composite
Export.image.toDrive({
    image: result17,
    description: 'Sentinel_UC_premonsoon_2016',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2017
// Load the image collection.
var dataset_18 = ee.ImageCollection('COPERNICUS/S2').filterDate('2017-02-01', '2017-05-31').filterBounds(region);
// Compute the median.
var median_18 = dataset_18.median();

// Select the bands of interest.
var bands_18 = median_18.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_18,
    description: 'Sentinel-premonsoon_2017',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training18 = bands_18.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer18 = ee.Clusterer.wekaKMeans(13).train(training18);

// Cluster the input using the trained clusterer.
var result18 = bands_18.cluster(clusterer18).clip(region);

// Display the clusters with random colors.
Map.addLayer(result18.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2017');
print(result18);

// Exporting UC composite
Export.image.toDrive({
    image: result18,
    description: 'Sentinel_UC_premonsoon_2017',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2018
// Load the image collection.
var dataset_19 = ee.ImageCollection('COPERNICUS/S2').filterDate('2018-02-01', '2018-05-31').filterBounds(region);
// Compute the median.
var median_19 = dataset_19.median();

// Select the bands of interest.
var bands_19 = median_19.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_19,
    description: 'Sentinel-premonsoon_2018',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training19 = bands_19.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer19 = ee.Clusterer.wekaKMeans(13).train(training19);

// Cluster the input using the trained clusterer.
var result19 = bands_19.cluster(clusterer19).clip(region);

// Display the clusters with random colors.
Map.addLayer(result19.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2018');
print(result19);

// Exporting UC composite
Export.image.toDrive({
    image: result19,
    description: 'Sentinel_UC_premonsoon_2018',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2019
// Load the image collection.
var dataset_20 = ee.ImageCollection('COPERNICUS/S2').filterDate('2019-02-01', '2019-05-31').filterBounds(region);
// Compute the median.
var median_20 = dataset_20.median();

// Select the bands of interest.
var bands_20 = median_20.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_20,
    description: 'Sentinel-premonsoon_2019',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training20 = bands_20.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer20 = ee.Clusterer.wekaKMeans(13).train(training20);

// Cluster the input using the trained clusterer.
var result20 = bands_20.cluster(clusterer20).clip(region);

// Display the clusters with random colors.
Map.addLayer(result20.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2019');
print(result20);

// Exporting UC composite
Export.image.toDrive({
    image: result20,
    description: 'Sentinel_UC_premonsoon_2019',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2020
// Load the image collection.
var dataset_21 = ee.ImageCollection('COPERNICUS/S2').filterDate('2020-02-01', '2020-05-31').filterBounds(region);
// Compute the median.
var median_21 = dataset_21.median();

// Select the bands of interest.
var bands_21 = median_21.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_21,
    description: 'Sentinel-premonsoon_2020',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training21 = bands_21.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer21 = ee.Clusterer.wekaKMeans(13).train(training21);

// Cluster the input using the trained clusterer.
var result21 = bands_21.cluster(clusterer21).clip(region);

// Display the clusters with random colors.
Map.addLayer(result21.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2020');
print(result21);

// Exporting UC composite
Export.image.toDrive({
    image: result21,
    description: 'Sentinel_UC_premonsoon_2020',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2021
// Load the image collection.
var dataset_22 = ee.ImageCollection('COPERNICUS/S2').filterDate('2021-02-01', '2021-05-31').filterBounds(region);
// Compute the median.
var median_22 = dataset_22.median();

// Select the bands of interest.
var bands_22 = median_22.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_22,
    description: 'Sentinel-premonsoon_2021',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training22 = bands_22.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer22 = ee.Clusterer.wekaKMeans(13).train(training22);

// Cluster the input using the trained clusterer.
var result22 = bands_22.cluster(clusterer22).clip(region);

// Display the clusters with random colors.
Map.addLayer(result22.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2021');
print(result22);

// Exporting UC composite
Export.image.toDrive({
    image: result22,
    description: 'Sentinel_UC_premonsoon_2021',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2022
// Load the image collection.
var dataset_23 = ee.ImageCollection('COPERNICUS/S2').filterDate('2022-02-01', '2022-05-31').filterBounds(region);
// Compute the median.
var median_23 = dataset_23.median();

// Select the bands of interest.
var bands_23 = median_23.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_23,
    description: 'Sentinel-premonsoon_2022',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training23 = bands_23.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer23 = ee.Clusterer.wekaKMeans(13).train(training23);

// Cluster the input using the trained clusterer.
var result23 = bands_23.cluster(clusterer23).clip(region);

// Display the clusters with random colors.
Map.addLayer(result23.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2022');
print(result23);

// Exporting UC composite
Export.image.toDrive({
    image: result23,
    description: 'Sentinel_UC_premonsoon_2022',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});