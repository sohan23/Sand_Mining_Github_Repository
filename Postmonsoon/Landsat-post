/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = /* color: #98ff00 */ee.Geometry.Polygon(
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

//for the year 2000
// Load the image collection. 
var dataset_1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-10-01', '2000-12-31').filterBounds(region);
// Compute the median.
var median_1 = dataset_1.median();
print(median_1);
// Select the bands of interest.
var bands_1 = median_1.select(['SR_B1','SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_1);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_1,
    description: 'composite_postmonsoon_2000',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training1 = bands_1.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer1 = ee.Clusterer.wekaKMeans(13).train(training1);

// Cluster the input using the trained clusterer.
var result1 = bands_1.cluster(clusterer1).clip(region);

// Display the clusters with random colors.
Map.addLayer(result1.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2000');
print(result1);

// Exporting UC composite
Export.image.toDrive({
    image: result1,
    description: 'UC_postmonsoon_2000',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2001
// Load the image collection.
var dataset_2 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2001-10-01', '2001-12-31').filterBounds(region);
// Compute the median.
var median_2 = dataset_2.median();
print(median_2);
// Select the bands of interest.
var bands_2 = median_2.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_2);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2,
    description: 'composite_postmonsoon_2001',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training2 = bands_2.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer2 = ee.Clusterer.wekaKMeans(13).train(training2);

// Cluster the input using the trained clusterer.
var result2 = bands_2.cluster(clusterer2).clip(region);

// Display the clusters with random colors.
Map.addLayer(result2.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2001');
print(result2);

// Exporting UC composite
Export.image.toDrive({
    image: result2,
    description: 'UC_postmonsoon_2001',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2002
// Load the image collection.
var dataset_3 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2002-10-01', '2002-12-31').filterBounds(region);
// Compute the median.
var median_3 = dataset_3.median();
print(median_3);
// Select the bands of interest.
var bands_3 = median_3.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_3);
// Export the image, specifying scale and region.       
Export.image.toDrive({
    image: bands_3,
    description: 'composite_postmonsoon_2002',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training3 = bands_3.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer3 = ee.Clusterer.wekaKMeans(13).train(training3);

// Cluster the input using the trained clusterer.
var result3 = bands_3.cluster(clusterer3).clip(region);

// Display the clusters with random colors.
Map.addLayer(result3.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2002');
print(result3);

// Exporting UC composite
Export.image.toDrive({
    image: result3,
    description: 'UC_postmonsoon_2002',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2003
// Load the image collection.
var dataset_4 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2003-10-01', '2003-12-31').filterBounds(region);
// Compute the median.
var median_4 = dataset_4.median();
print(median_4);
// Select the bands of interest.
var bands_4 = median_4.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_4);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_4,
    description: 'composite_postmonsoon_2003',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training4 = bands_4.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer4 = ee.Clusterer.wekaKMeans(13).train(training4);

// Cluster the input using the trained clusterer.
var result4 = bands_4.cluster(clusterer4).clip(region);

// Display the clusters with random colors.
Map.addLayer(result4.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2003');
print(result4);

// Exporting UC composite
Export.image.toDrive({
    image: result4,
    description: 'UC_postmonsoon_2003',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2004
// Load the image collection.
var dataset_5 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2004-10-01', '2004-12-31').filterBounds(region);
// Compute the median.
var median_5 = dataset_5.median();
print(median_5);
// Select the bands of interest.
var bands_5 = median_5.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_5);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_5,
    description: 'composite_postmonsoon_2004',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training5 = bands_5.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer5 = ee.Clusterer.wekaKMeans(13).train(training5);

// Cluster the input using the trained clusterer.
var result5 = bands_5.cluster(clusterer5).clip(region);

// Display the clusters with random colors.
Map.addLayer(result5.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2004');
print(result5);

// Exporting UC composite
Export.image.toDrive({
    image: result5,
    description: 'UC_postmonsoon_2004',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2005
// Load the image collection.
var dataset_6 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2005-10-01', '2005-12-31').filterBounds(region);
// Compute the median.
var median_6 = dataset_6.median();
print(median_6);
// Select the bands of interest.
var bands_6 = median_6.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_6);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_6,
    description: 'composite_postmonsoon_2005',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training6 = bands_6.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer6 = ee.Clusterer.wekaKMeans(13).train(training6);

// Cluster the input using the trained clusterer.
var result6 = bands_6.cluster(clusterer6).clip(region);

// Display the clusters with random colors.
Map.addLayer(result6.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2005');
print(result6);

// Exporting UC composite
Export.image.toDrive({
    image: result6,
    description: 'UC_postmonsoon_2005',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2006
// Load the image collection.
var dataset_7 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2006-10-01', '2006-12-31').filterBounds(region);
// Compute the median.
var median_7 = dataset_7.median();
print(median_7);
// Select the bands of interest.
var bands_7 = median_7.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_7);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_7,
    description: 'composite_postmonsoon_2006',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training7 = bands_7.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer7 = ee.Clusterer.wekaKMeans(13).train(training7);

// Cluster the input using the trained clusterer.
var result7 = bands_7.cluster(clusterer7).clip(region);

// Display the clusters with random colors.
Map.addLayer(result7.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2006');
print(result7);

// Exporting UC composite
Export.image.toDrive({
    image: result7,
    description: 'UC_postmonsoon_2006',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2007
// Load the image collection.
var dataset_8 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2007-10-01', '2007-12-31').filterBounds(region);
// Compute the median.
var median_8 = dataset_8.median();
print(median_8);
// Select the bands of interest.
var bands_8 = median_8.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_8);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_8,
    description: 'composite_postmonsoon_2007',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training8 = bands_8.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer8 = ee.Clusterer.wekaKMeans(13).train(training8);

// Cluster the input using the trained clusterer.
var result8 = bands_8.cluster(clusterer8).clip(region);

// Display the clusters with random colors.
Map.addLayer(result8.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2007');
print(result8);

// Exporting UC composite
Export.image.toDrive({
    image: result8,
    description: 'UC_postmonsoon_2007',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2008
// Load the image collection.
var dataset_9 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2008-10-01', '2008-12-31').filterBounds(region);
// Compute the median.
var median_9 = dataset_9.median();
print(median_9);
// Select the bands of interest.
var bands_9 = median_9.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_9);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_9,
    description: 'composite_postmonsoon_2008',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training9 = bands_9.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer9 = ee.Clusterer.wekaKMeans(13).train(training9);

// Cluster the input using the trained clusterer.
var result9 = bands_9.cluster(clusterer9).clip(region);

// Display the clusters with random colors.
Map.addLayer(result9.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2008');
print(result9);

// Exporting UC composite
Export.image.toDrive({
    image: result9,
    description: 'UC_postmonsoon_2008',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2009
// Load the image collection.
var dataset_10 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2009-10-01', '2009-12-31').filterBounds(region);
// Compute the median.
var median_10 = dataset_10.median();
print(median_10);
// Select the bands of interest.
var bands_10 = median_10.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_10);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_10,
    description: 'composite_postmonsoon_2009',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training10 = bands_10.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer10 = ee.Clusterer.wekaKMeans(13).train(training10);

// Cluster the input using the trained clusterer.
var result10 = bands_10.cluster(clusterer10).clip(region);

// Display the clusters with random colors.
Map.addLayer(result10.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2009');
print(result10);

// Exporting UC composite
Export.image.toDrive({
    image: result10,
    description: 'UC_postmonsoon_2009',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2010
// Load the image collection.
var dataset_11 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2010-10-01', '2010-12-31').filterBounds(region);
// Compute the median.
var median_11 = dataset_11.median();
print(median_11);
// Select the bands of interest.
var bands_11 = median_11.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_11);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_11,
    description: 'composite_postmonsoon_2010',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training11 = bands_11.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer11 = ee.Clusterer.wekaKMeans(13).train(training11);

// Cluster the input using the trained clusterer.
var result11 = bands_11.cluster(clusterer11).clip(region);

// Display the clusters with random colors.
Map.addLayer(result11.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2010');
print(result11);

// Exporting UC composite
Export.image.toDrive({
    image: result11,
    description: 'UC_postmonsoon_2010',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2011
// Load the image collection.
var dataset_12 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2011-10-01', '2011-12-31').filterBounds(region);
// Compute the median.
var median_12 = dataset_12.median();
print(median_12);
// Select the bands of interest.
var bands_12 = median_12.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_12);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_12,
    description: 'composite_postmonsoon_2011',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training12 = bands_12.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer12 = ee.Clusterer.wekaKMeans(13).train(training12);

// Cluster the input using the trained clusterer.
var result12 = bands_12.cluster(clusterer12).clip(region);

// Display the clusters with random colors.
Map.addLayer(result12.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2011');
print(result12);

// Exporting UC composite
Export.image.toDrive({
    image: result12,
    description: 'UC_postmonsoon_2011',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2012
// Load the image collection.
var dataset_13 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2012-10-01', '2012-12-31').filterBounds(region);
// Compute the median.
var median_13 = dataset_13.median();
print(median_13);
// Select the bands of interest.
var bands_13 = median_13.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_13);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_13,
    description: 'composite_postmonsoon_2012',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training13 = bands_13.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer13 = ee.Clusterer.wekaKMeans(13).train(training13);

// Cluster the input using the trained clusterer.
var result13 = bands_13.cluster(clusterer13).clip(region);

// Display the clusters with random colors.
Map.addLayer(result13.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2012');
print(result13);

// Exporting UC composite
Export.image.toDrive({
    image: result13,
    description: 'UC_postmonsoon_2012',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2013
// Load the image collection.
var dataset_14 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2013-10-01', '2013-12-31').filterBounds(region);
// Compute the median.
var median_14 = dataset_14.median();
print(median_14);
// Select the bands of interest.
var bands_14 = median_14.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_14);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_14,
    description: 'composite_postmonsoon_2013',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training14 = bands_14.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer14 = ee.Clusterer.wekaKMeans(13).train(training14);

// Cluster the input using the trained clusterer.
var result14 = bands_14.cluster(clusterer14).clip(region);

// Display the clusters with random colors.
Map.addLayer(result14.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2013');
print(result14);

// Exporting UC composite
Export.image.toDrive({
    image: result14,
    description: 'UC_postmonsoon_2013',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2014
// Load the image collection.
var dataset_15 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2014-10-01', '2014-12-31').filterBounds(region);
// Compute the median.
var median_15 = dataset_15.median();
print(median_15);
// Select the bands of interest.
var bands_15 = median_15.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);
print(bands_15);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_15,
    description: 'composite_postmonsoon_2014',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training15 = bands_15.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer15 = ee.Clusterer.wekaKMeans(13).train(training15);

// Cluster the input using the trained clusterer.
var result15 = bands_15.cluster(clusterer15).clip(region);

// Display the clusters with random colors.
Map.addLayer(result15.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2014');
print(result15);

// Exporting UC composite
Export.image.toDrive({
    image: result15,
    description: 'UC_postmonsoon_2014',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2015
// Load the image collection.
var dataset_16 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2015-10-01', '2015-12-31').filterBounds(region);
// Compute the median.
var median_16 = dataset_16.median();

// Select the bands of interest.
var bands_16 = median_16.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_16,
    description: 'composite_postmonsoon_2015',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training16 = bands_16.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer16 = ee.Clusterer.wekaKMeans(13).train(training16);

// Cluster the input using the trained clusterer.
var result16 = bands_16.cluster(clusterer16).clip(region);

// Display the clusters with random colors.
Map.addLayer(result16.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2015');
print(result16);

// Exporting UC composite
Export.image.toDrive({
    image: result16,
    description: 'UC_postmonsoon_2015',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

//for the year 2016
// Load the image collection.
var dataset_17 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2016-10-01', '2016-12-31').filterBounds(region);
// Compute the median.
var median_17 = dataset_17.median();

// Select the bands of interest.
var bands_17 = median_17.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_17,
    description: 'composite_postmonsoon_2016',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training17 = bands_17.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer17 = ee.Clusterer.wekaKMeans(13).train(training17);

// Cluster the input using the trained clusterer.
var result17 = bands_17.cluster(clusterer17).clip(region);

// Display the clusters with random colors.
Map.addLayer(result17.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2016');
print(result17);

// Exporting UC composite
Export.image.toDrive({
    image: result17,
    description: 'UC_postmonsoon_2016',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2017
// Load the image collection.
var dataset_18 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2017-10-01', '2017-12-31').filterBounds(region);
// Compute the median.
var median_18 = dataset_18.median();

// Select the bands of interest.
var bands_18 = median_18.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_18,
    description: 'composite_postmonsoon_2017',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training18 = bands_18.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer18 = ee.Clusterer.wekaKMeans(13).train(training18);

// Cluster the input using the trained clusterer.
var result18 = bands_18.cluster(clusterer18).clip(region);

// Display the clusters with random colors.
Map.addLayer(result18.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2017');
print(result18);

// Exporting UC composite
Export.image.toDrive({
    image: result18,
    description: 'UC_postmonsoon_2017',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2018
// Load the image collection.
var dataset_19 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2018-10-01', '2018-12-31').filterBounds(region);
// Compute the median.
var median_19 = dataset_19.median();

// Select the bands of interest.
var bands_19 = median_19.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_19,
    description: 'composite_postmonsoon_2018',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training19 = bands_19.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer19 = ee.Clusterer.wekaKMeans(13).train(training19);

// Cluster the input using the trained clusterer.
var result19 = bands_19.cluster(clusterer19).clip(region);

// Display the clusters with random colors.
Map.addLayer(result19.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2018');
print(result19);

// Exporting UC composite
Export.image.toDrive({
    image: result19,
    description: 'UC_postmonsoon_2018',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2019
// Load the image collection.
var dataset_20 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2019-10-01', '2019-12-31').filterBounds(region);
// Compute the median.
var median_20 = dataset_20.median();

// Select the bands of interest.
var bands_20 = median_20.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_20,
    description: 'composite_postmonsoon_2019',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training20 = bands_20.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer20 = ee.Clusterer.wekaKMeans(13).train(training20);

// Cluster the input using the trained clusterer.
var result20 = bands_20.cluster(clusterer20).clip(region);

// Display the clusters with random colors.
Map.addLayer(result20.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2019');
print(result20);

// Exporting UC composite
Export.image.toDrive({
    image: result20,
    description: 'UC_postmonsoon_2019',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2020
// Load the image collection.
var dataset_21 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2020-10-01', '2020-12-31').filterBounds(region);
// Compute the median.
var median_21 = dataset_21.median();

// Select the bands of interest.
var bands_21 = median_21.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_21,
    description: 'composite_postmonsoon_2020',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training21 = bands_21.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer21 = ee.Clusterer.wekaKMeans(13).train(training21);

// Cluster the input using the trained clusterer.
var result21 = bands_21.cluster(clusterer21).clip(region);

// Display the clusters with random colors.
Map.addLayer(result21.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2020');
print(result21);

// Exporting UC composite
Export.image.toDrive({
    image: result21,
    description: 'UC_postmonsoon_2020',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2021
// Load the image collection.
var dataset_22 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2021-10-01', '2021-12-31').filterBounds(region);
// Compute the median.
var median_22 = dataset_22.median();

// Select the bands of interest.
var bands_22 = median_22.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_22,
    description: 'composite_postmonsoon_2021',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training22 = bands_22.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer22 = ee.Clusterer.wekaKMeans(13).train(training22);

// Cluster the input using the trained clusterer.
var result22 = bands_22.cluster(clusterer22).clip(region);

// Display the clusters with random colors.
Map.addLayer(result22.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2021');
print(result22);

// Exporting UC composite
Export.image.toDrive({
    image: result22,
    description: 'UC_postmonsoon_2021',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

//for the year 2022
// Load the image collection.
var dataset_23 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2022-10-01', '2022-12-31').filterBounds(region);
// Compute the median.
var median_23 = dataset_23.median();

// Select the bands of interest.
var bands_23 = median_23.select(['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_23,
    description: 'composite_postmonsoon_2022',
    folder: 'GEE_Composite',
    scale:30,
    region: region
});

// Make the training dataset.
var training23 = bands_23.sample({
    region: region,
    scale:30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer23 = ee.Clusterer.wekaKMeans(13).train(training23);

// Cluster the input using the trained clusterer.
var result23 = bands_23.cluster(clusterer23).clip(region);

// Display the clusters with random colors.
Map.addLayer(result23.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2022');
print(result23);

// Exporting UC composite
Export.image.toDrive({
    image: result23,
    description: 'UC_postmonsoon_2022',
    folder: 'GEE_Unsupervised',
    scale:30,
    region: region,
});

