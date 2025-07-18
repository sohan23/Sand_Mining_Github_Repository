# Impact of Sand Mining on the Morphology of the Yamuna River

## A Remote Sensing and Machine Learning Approach

![Project Banner](https://i.imgur.com/your-banner-image.png)  *(Suggestion: You can create a banner image with some of the key visuals from your project, like the geomorphic maps)*

[cite_start]This repository contains the code and resources for the project "Impact of Sand Mining on the Morphology of the Yamuna River," which was the subject of my Master's thesis at the Indian Institute of Science Education and Research Bhopal[cite: 1, 32, 49].

[cite_start]This project investigates the impact of sand mining on the morphology of the Yamuna River using remote sensing techniques and machine learning[cite: 1, 75, 1133]. [cite_start]The study focuses on a 36 km stretch of the river from Hathnikund Barrage to the Old Delhi Bridge, an area that has seen a rise in reported sand mining activities[cite: 355, 526, 528].

### Abstract

[cite_start]The world consumes 40 to 50 billion tonnes of sand and aggregates annually, making it the second most mined commodity globally[cite: 69]. [cite_start]The natural replenishment rate of sand in rivers, however, is only about 19 billion tonnes[cite: 70, 125]. [cite_start]This significant gap has led to unsustainable and often illegal sand mining, especially in developing countries like India[cite: 72, 129]. [cite_start]This study utilizes remote sensing and machine learning to analyze the geomorphological changes in the Yamuna River from 2016 to 2020[cite: 77, 196, 1130]. [cite_start]By leveraging high-resolution PlanetScope satellite imagery, we assess the spatiotemporal changes in key geomorphic features like bar density, river width, and sinuosity[cite: 77, 432, 482]. [cite_start]The findings provide a quantitative assessment of the river's morphological response to sand mining and demonstrate the potential of remote sensing as a cost-effective tool for monitoring such activities[cite: 75, 79].

### Key Features

* [cite_start]**Temporal Analysis**: The project analyzes satellite imagery from 2016 to 2020, covering pre-monsoon, monsoon, and post-monsoon seasons[cite: 77, 435, 436, 437].
* [cite_start]**High-Resolution Imagery**: Utilizes 3-meter resolution PlanetScope imagery for detailed analysis[cite: 432, 445].
* [cite_start]**Machine Learning**: Employs unsupervised k-means clustering for the classification of geomorphic features[cite: 461, 462, 463].
* [cite_start]**Geomorphic Feature Extraction**: Calculates and analyzes changes in bar density, river width, and sinuosity[cite: 482].
* [cite_start]**Historical Comparison**: Compares recent changes with historical data from 1965 using declassified CORONA satellite imagery[cite: 430].

### Methodology

The methodology for this project can be summarized in the following steps:

1.  **Data Acquisition**:
    * [cite_start]Historical data: Declassified CORONA satellite images from 1965 (2m resolution)[cite: 430, 445].
    * [cite_start]Recent data: PlanetScope optical images from 2016 to 2020 (3m resolution)[cite: 432, 445].
2.  **Data Preprocessing**:
    * [cite_start]Georeferencing of CORONA images using a 3rd order polynomial transformation[cite: 442, 443, 448].
    * [cite_start]Creation of False Color Composites (FCC) from PlanetScope imagery to differentiate water bodies, vegetation, and sand deposits[cite: 454, 455].
    * [cite_start]Mosaicking and clipping of images to the study area[cite: 457, 458].
3.  **Image Classification**:
    * [cite_start]Application of unsupervised k-means clustering to classify the images into 18 classes[cite: 462].
    * [cite_start]Reclassification of the 18 classes into three main categories: water body, exposed deposited areas, and vegetation[cite: 475, 477].
4.  **Feature Extraction and Analysis**:
    * [cite_start]Vectorization of raster data to extract geomorphic features[cite: 479].
    * [cite_start]Calculation of Sinuosity, River Width, and Bar Density for each of the 9 reaches of the study area[cite: 482, 483, 492, 497].

![Methodology Flowchart](https://i.imgur.com/your-methodology-flowchart.png) *(Suggestion: You can use Figure 5 from your thesis here)*

### Results

The study revealed significant morphological changes in the Yamuna River over the study period:

* [cite_start]**Sinuosity**: Increased meandering was observed in the lower reaches of the river, with the highest sinuosity values seen in Reach 7[cite: 1021, 1138, 1139, 1167].
* [cite_start]**River Width**: The river channel widened during the monsoon and narrowed during the pre- and post-monsoon seasons[cite: 1141, 1149]. [cite_start]The year 2020 showed a different trend with a decrease in width from pre-monsoon to monsoon[cite: 1142].
* [cite_start]**Bar Density**: The highest deposition of sand bars was observed during the pre-monsoon and post-monsoon periods, especially in the upper reaches[cite: 1143]. [cite_start]A decrease in bar density in the pre-monsoon period suggests that mining activities are a contributing factor[cite: 1154].

[cite_start]The overall accuracy of the classification model ranged from 61% to 92%, demonstrating the effectiveness of the approach, especially with low cloud cover[cite: 531, 1135, 1136].

![Geomorphic Map](https://i.imgur.com/your-geomorphic-map.png) *(Suggestion: Include one of the geomorphic maps from your thesis, for example, Figure 13)*

### How to Use

The Google Earth Engine script used for this project is available in the `Satkyukt.js` file. You can load this script into your Google Earth Engine account to replicate the analysis.

### Future Work

This study can be further improved by:

* [cite_start]**Incorporating Field Data**: Integrating field-acquired data can help in validating the results and improving the accuracy of the analysis[cite: 1174].
* [cite_start]**Using Higher Resolution Imagery**: Utilizing data from drones and UAVs can provide even more detailed insights[cite: 1175].
* [cite_start]**Volumetric Analysis**: Incorporating height data from LiDAR or SAR can enable the calculation of the volume of sand extracted, providing a more comprehensive assessment of the mining impact[cite: 1176, 1177].
* [cite_start]**SAR Data Integration**: Using SAR data can allow for monitoring during both day and night and in all weather conditions[cite: 1177].

### Acknowledgments

[cite_start]I would like to express my sincere gratitude to my supervisors, Dr. Kumar Gaurav and Dr. Christopher R. Hackney, for their invaluable guidance and support throughout this project[cite: 51]. [cite_start]I would also like to thank my thesis committee members and the students of the Fluvial Geomorphology and Remote Sensing Lab for their insightful comments and encouragement[cite: 52, 53, 54, 55, 56, 57].

### Contact

For any questions or collaborations, please feel free to reach out:

* **Name**: Sohan Nag
* **Email**: [Your Email]
* **LinkedIn**: [Your LinkedIn Profile]
* **GitHub**: [Your GitHub Profile]
