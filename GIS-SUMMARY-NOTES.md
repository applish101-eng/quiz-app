# GIS (Geographical Information System) — Summary Notes

---

## UNIT 1: Introduction

### 1.1 Definition of GIS
**GIS** = Computer-based system to **collect, store, analyze, and visualize** spatial and geographic data to support decision-making.

### 1.2 Functions of GIS (12)
| # | Function | Meaning | Example |
|---|----------|---------|---------|
| 1 | Data Collection (Input) | Gather spatial + attribute data from GPS, satellites, surveys | Collecting school coordinates via GPS |
| 2 | Data Storage | Store large volumes of geographic data in databases | Digital land records |
| 3 | Data Management | Organize and update data systematically | Updating population data |
| 4 | Data Manipulation | Edit/convert raw data into usable formats | Paper maps to digital maps |
| 5 | Data Integration | Combine data from multiple sources | Satellite images + census data |
| 6 | Spatial Analysis | Analyze relationships between features | Finding flood-prone areas |
| 7 | Buffer Analysis | Create zones around features | Buffer zone around a river |
| 8 | Overlay Analysis | Overlay multiple layers for insights | Soil + land use maps |
| 9 | Network Analysis | Analyze routes and connectivity | Shortest delivery route |
| 10 | Data Visualization | Present data as maps, charts, graphs | Population density map |
| 11 | Query & Retrieval | Search/retrieve specific geographic data | All hospitals in a district |
| 12 | Decision Support | Support planning and policy-making | Site selection for airport |

### 1.3 Components of GIS (6)
| Component | Meaning | Examples |
|-----------|---------|----------|
| **Hardware** | Physical devices | Computers, GPS, scanners, digitizers |
| **Software** | Tools for input, processing, analysis | ArcGIS, QGIS |
| **Data** | Core information (most important) | Maps, coordinates, population |
| **People** | Users and experts | GIS analysts, cartographers |
| **Methods** | Procedures and rules | Collection methods, quality control |
| **Network** | Data sharing system | Internet, cloud GIS |

### 1.4 GIS as Information System
**Cycle:** Input -> Storage -> Processing -> Output
- **Input:** Maps, GPS, remote sensing, surveys
- **Storage:** Spatial database + Attribute database
- **Processing:** Spatial analysis, querying, modeling
- **Output:** Maps, charts, reports, visualizations

### 1.5 Nature of GIS Data
| Type | Meaning | Examples |
|------|---------|----------|
| **Spatial** | Location and shape | Coordinates, roads, rivers |
| **Attribute** | Descriptive properties | Population, road type, soil type |
| **Integrated** | Both combined | City location + its population |

### 1.6 Sources of GIS Data
| Source | Description | Example |
|--------|-------------|---------|
| **Remote Sensing** | Satellites, aerial photography | Land use mapping |
| **GPS** | Accurate field coordinates | Road/building location |
| **Existing Maps** | Scanned + digitized | Topographic, cadastral maps |
| **Field Survey** | Direct measurement | Land measurement surveys |

### 1.7 Recent Trends & Future
**Trends:**
1. AI & ML Integration - automated analysis
2. Cloud-Based GIS - better accessibility
3. IoT Integration - real-time data
4. 3D GIS & Digital Twins - simulation
5. Mobile & Web GIS - field data collection
6. Location Intelligence - business analytics

**Future:**
- Advanced AI / Autonomous GIS
- Enhanced real-time spatial data
- Climate & environmental applications
- Expansion into new industries
- Improved data quality & interoperability

---

## UNIT 2: GIS and Map

### 2.1 Definition of Map
A **map** = Symbolic, scaled representation of selected Earth features on a flat surface.

### 2.2 Map Characteristics (Elements)
| Element | Meaning |
|---------|---------|
| **T**itle | What the map represents |
| **S**cale | Map distance : Real distance |
| **D**irection | North arrow / compass |
| **L**egend | Meaning of symbols/colors |
| **S**ymbols | Visual representation of features |
| **C**oordinates | Latitude & Longitude |
| **P**rojection | 3D Earth to 2D flat |
| **C**olor | Feature identification (blue=water, green=forest) |
| **D**ate/Source | Data reliability info |

### 2.3 Mapping Concepts
- **Layer:** Organized data by theme (roads, rivers, buildings)
- **Layer Data Linking:** Layer links to data files; updates auto-reflect
- **CRS:** Coordinate Reference System (e.g., WGS 84)
- **GIS Mapping:** Digital representation of real-world features

### 2.4 Mapping Techniques
**Flow:** Input -> Processing -> Output
1. **Data Preparation:** Collection + Digitizing (paper to digital)
2. **Data Organization:** Layering + Attribute Linking + Projection (CRS)
3. **Analysis & Output:** Spatial Analysis + Visualization

### 2.5 Cartographic Methods (Map Representation)
| Method | Description | Example |
|--------|-------------|---------|
| **Thematic** | One specific subject | Population map |
| **Choropleth** | Color-shaded regions by value | Population density (dark=high) |
| **Proportional Symbol** | Symbol size = data value | City population circles |
| **Dot Density** | Dots = fixed quantity | 1 dot = 100 people |
| **Isoline (Contour)** | Lines of equal value | Temperature isotherms |
| **Raster** | Grid of pixels | Satellite image |
| **Vector** | Points, lines, polygons | Road/district map |

### 2.6 Map Projection
**Definition:** Converting 3D Earth surface to 2D flat map using math (lat/lon to X,Y).

**Why needed:** For mapping, navigation, and spatial analysis in GIS.

**Distortion:** Always present - affects shape, area, distance, direction.

| Type | Surface Touch | Best For | Least Distortion | Most Distortion | Example |
|------|--------------|----------|-----------------|----------------|---------|
| **Cylindrical** | Equator | World maps, navigation | At Equator | At Poles | Mercator |
| **Conic** | Standard parallels | Mid-latitude, E-W countries | Along parallels | Away from parallels | Lambert Conformal Conic |
| **Planar (Azimuthal)** | Center point | Polar regions | At Center | At Edges | Polar projection |

---

## UNIT 3: GIS Data Sources & Structures

### 3.1 Capturing GIS Data
**Definition:** Collecting real-world geographic information and converting it into digital form.

**Methods:**
- **Primary:** Direct field measurement, GPS, remote sensing
- **Secondary:** Scanning + digitizing existing maps
- **Georeferencing:** Assigning real-world coordinates to scanned maps/images
- **Digitizing:** Converting paper maps to digital vector data (points, lines, polygons)

### 3.2 Data Sources Summary
| Source | Type | Details |
|--------|------|---------|
| **Maps** | Secondary | Topographic, Thematic, Cadastral, Administrative |
| **GPS** | Primary | Accurate coordinates (lat, lon, alt); files: GPX, CSV, KML, KMZ |
| **Images** | Primary | Satellite, Aerial, Drone - for LULC, monitoring |
| **Databases** | Secondary | Store spatial + attribute data linked by IDs |

### 3.3 Data Structures: Vector vs Raster vs TIN

| Feature | **Vector** | **Raster** | **TIN** |
|---------|-----------|-----------|---------|
| **Representation** | Points, Lines, Polygons | Grid cells (pixels) | Connected irregular triangles |
| **Best For** | Discrete features (roads, buildings) | Continuous data (elevation, rainfall) | Terrain/elevation modeling |
| **Accuracy** | High positional | Depends on cell size | High for terrain |
| **Storage** | Smaller for simple features | Large at high resolution | Efficient for uneven terrain |
| **Zoomed In** | Remains sharp | Becomes pixelated | Remains sharp |
| **Analysis** | Network, boundary | Surface, spatial | 3D terrain, slope, aspect |
| **Data Structure** | Coordinates (X,Y) | Rows & columns of cells | Nodes & triangular faces |

#### Vector Data Types
| Type | Shape | For | Examples |
|------|-------|-----|----------|
| **Point** | Single coordinate | Position only (no area/length) | Schools, Hospitals, Wells |
| **Line** | Connected points | Features with length only | Roads, Rivers, Power lines |
| **Polygon** | Enclosed area | Features with area | Land parcels, Lakes, Boundaries |

#### Raster Data
- **Grid-based:** Rows & columns of cells (pixels)
- **Single value per cell:** Each pixel stores one value
- **Resolution determines accuracy:** Smaller cell = higher accuracy
- **Applications:** Satellite imagery, DEM, temperature/rainfall maps
- **Limitations:** Large file size, pixelated boundaries

#### TIN (Triangulated Irregular Network)
- Vector-based terrain model using connected triangles
- **High accuracy** for complex landforms (peaks, valleys, ridges)
- **Efficient storage** vs high-res raster
- **Applications:** DEM, terrain modeling, 3D visualization, slope/aspect analysis

### 3.4 Georeferencing
**Definition:** Assigning real-world coordinates (lat/lon) to maps/images.

**Process:** Select image -> Choose GCPs (Ground Control Points) -> Enter coordinates -> Apply transformation -> Check accuracy -> Save

**GCP Examples:** Road intersections, bridges, survey markers, building corners

### 3.5 GIS Data Modeling
**Definition:** Converting real-world features into digital representations (Point/Line/Polygon/Raster/TIN).

**Process:** Identify features -> Choose model -> Add attributes -> Create layers -> Store in DB -> Analysis

### 3.6 GIS Database Design
| Stage | Focus | Activities |
|-------|-------|-----------|
| **Conceptual** | What data is needed? | Identify entities, choose models (Point/Line/Polygon/Raster/TIN) |
| **Logical** | How data is organized? | Define tables, relationships, attributes |
| **Physical** | How data is stored? | File formats, indexing, storage methods |

**Characteristics of Good DB Design:** Up-to-date, Flexible, Accurate, Compatible, Well-structured, Accessible, Consistent, Supports analysis

---

## UNIT 4: Spatial Data Modeling and Analysis

### 4.1 Definition
**Spatial Data Modeling** = Process of representing real-world geographic features and their spatial relationships in digital form for storage, management, analysis, and visualization.

Two main questions: **Where is it?** (location) + **What is it?** (attributes)

### 4.2 Spatial Data Models
| Model | Definition | Represents | Examples |
|-------|-----------|-----------|----------|
| **Vector** | Points, lines, polygons for discrete features | Point/Line/Polygon | Schools, Roads, Land parcels |
| **Raster** | Grid cells for continuous phenomena | Pixels | Elevation, Rainfall, Temperature |
| **TIN** | Connected triangles for terrain | Triangles | Mountains, Valleys, 3D landscapes |

### 4.3 Spatial Relationships
| Relationship | Definition | Example | GIS Use |
|-------------|-----------|---------|---------|
| **Adjacency** | Share common boundary | Neighboring districts | Boundary analysis |
| **Connectivity** | Connected through network | Roads at intersection | Route finding |
| **Containment** | Feature inside another | School inside municipality | Admin analysis |
| **Proximity** | Nearness to each other | Nearest hospital | Distance analysis |
| **Intersection** | Overlap or cross | Road crossing river | Overlay analysis |

### 4.4 Vector-Based Analysis
**Definition:** Analyzing data represented as points, lines, and polygons.

| Method | What it does | Example | Spatial Relationship |
|--------|-------------|---------|---------------------|
| **Buffer Analysis** | Create zone at fixed distance | 500m around road | Proximity |
| **Overlay Analysis** | Combine multiple layers | Land use + flood zone | Containment, Intersection |
| **Network Analysis** | Analyze connected features | Shortest path to hospital | Connectivity |
| **Proximity Analysis** | Measure nearness | Nearest hospital to village | Proximity |
| **Location Query** | Select by location condition | Schools within municipality | Containment |

#### Vector Analysis Tools
| Tool Category | Think Like | Examples |
|--------------|-----------|----------|
| **Analysis** | Measure and count | Points in Polygon, Distance Matrix, Statistics |
| **Geoprocessing** | Cut and combine maps | Clip, Buffer, Union, Intersection, Dissolve |
| **Geometry** | Change shape of features | Centroid, Convex Hull, Voronoi, Simplify |
| **Research** | Select or sample data | Select by Location, Random Points, Spatial Query |
| **Data Management** | Organize and clean data | Merge, Split, Join Attributes, Spatial Index |

### 4.5 Raster-Based Analysis
**Definition:** Analyzing spatial data represented as grid cells (pixels) for continuous phenomena.

| Type | Think Like | Example | Tools |
|------|-----------|---------|-------|
| **Surface Analysis** | How does land look? | Slope, Aspect, Hillshade | Slope, Aspect, Hillshade |
| **Spatial Interpolation** | Guess missing values | Rainfall between stations | IDW, Kriging, Spline |
| **Suitability Analysis** | Best place to build | Best land for farming | Raster Calculator |
| **Change Detection** | What changed over time? | Forest loss 2010-2025 | Image difference |
| **Density Analysis** | How crowded is it? | Population density | Kernel Density |
| **Hydrology** | How water flows | Flood prediction | Flow Direction, Accumulation |
| **Visibility** | What can I see? | What can be seen from tower | Viewshed |
| **Classification** | What type of land? | Forest, Water, Urban | Supervised/Unsupervised |

#### Raster Analysis Tools
| Tool Category | Tools |
|-------------|-------|
| **Basic Terrain** | Aspect, Slope, Hillshade, Roughness |
| **Processing** | Raster Calculator, Extraction, Mosaic, Clipping, Reclassification |
| **Interpolation** | IDW, Kriging, Nearest Neighbor, Moving Average |
| **Terrain** | TPI (Topographic Position), TRI (Terrain Ruggedness) |
| **Conversion** | Rasterization (vector to raster), Polygonization (raster to vector) |
| **Support** | Zonal Statistics, Raster Sampling, Georeferencing |

**Core Method:** Map Algebra - mathematical operations on raster cells (add, subtract, multiply)

---

## UNIT 5: GIS Data Modeling & Creating Maps

### 5.1 GIS Models (2 Types)
| Model | Purpose | Focus | Output |
|-------|---------|-------|--------|
| **Spatial Models** | Analyze current relationships | Present patterns | Suitability, Risk maps |
| **Predictive Models** | Forecast future events | Future trends | Predictions, Forecasts |

### 5.2 Surface Modeling
**Definition:** Creating a digital representation of continuously varying geographic phenomena (elevation, rainfall, temperature, pollution).

**Input:** DEM, elevation points, rainfall stations
**Output:** Slope maps, Aspect maps, Hillshade maps, Contour maps, 3D terrain

#### Surface Modeling Methods
| Method | Purpose |
|--------|---------|
| **Interpolation** | Estimate unknown values from known points |
| **Contour Mapping** | Lines connecting equal values |
| **TIN** | Terrain using connected triangles |
| **Raster Surface** | Surfaces using grid cells |
| **Slope Analysis** | Measure terrain steepness |
| **Aspect Analysis** | Determine slope direction |
| **Hillshade** | 3D shaded terrain effect |
| **Kriging** | Advanced statistical prediction |
| **Spline** | Smooth surface generation |

#### Surface Outputs
| Output | What it shows | Uses |
|--------|--------------|------|
| **Slope Map** | Steepness of terrain (degrees/%) | Road design, landslide studies |
| **Aspect Map** | Direction slope faces (N,S,E,W) | Agriculture, solar planning |
| **Hillshade Map** | 3D shaded relief | Terrain visualization |
| **Contour Map** | Lines of equal elevation | Surveying, engineering |

### 5.3 Hydrology Modeling
**Definition:** Simulating movement, distribution, and storage of water using GIS and DEM data.

**Core Input:** DEM (Digital Elevation Model)

**Hydrology Workflow:**
`
DEM -> Fill Sinks -> Flow Direction -> Flow Accumulation -> Stream Extraction -> Watershed Delineation -> Flood Risk Analysis
`

| Operation | What it does |
|-----------|-------------|
| **DEM** | Raster showing ground elevation (base data) |
| **Fill Sinks** | Remove depressions so water flows continuously |
| **Flow Direction** | Shows where water flows from each cell (to lowest neighbor) |
| **Flow Accumulation** | Shows how much water flows into each cell (identifies rivers) |
| **Stream Extraction** | Identifies river channels from accumulation threshold |
| **Watershed Delineation** | Defines land area draining to a common outlet |
| **Flood Risk Analysis** | Identifies flood-prone areas using flow + slope + elevation |

**Watershed:** Land area (not water body) that directs rainwater to a common outlet (river/lake/dam).

**Applications:** Water resource management, flood prediction, drainage planning, dam/reservoir planning, irrigation

### 5.4 Designing & Printing Maps

#### Map Components
| Component | Description |
|-----------|-------------|
| **Title** | Theme or purpose (top of map) |
| **Legend** | Meaning of symbols and colors |
| **Scale Bar** | Map distance to ground distance |
| **North Arrow** | Indicates north direction |
| **Labels** | Names of places and features |

#### Principles of Good Map Design
1. **Clarity** - Easy to read and understand
2. **Simplicity** - Avoid unnecessary information
3. **Balance** - Neat and proportional arrangement
4. **Accuracy** - Correct data and scale
5. **Proper Colors/Symbols** - Meaningful and interpretable
6. **Readable Text** - Clear, appropriately sized labels
7. **Complete Elements** - Title, legend, scale, north arrow, source

#### Map Printing Process
Prepare Layout -> Set Page Size -> Check Elements -> Preview -> Export/Print -> Final Map

**Export Formats:** PDF, PNG, JPEG

**Software:** QGIS, ArcGIS

---

## Quick Memory Tricks

### 6 GIS Components
**H**ardware, **S**oftware, **D**ata, **P**eople, **M**ethods, **N**etwork

### Map Elements (TSDL SCPC D)
**T**itle, **S**cale, **D**irection, **L**egend, **S**ymbols, **C**oordinates, **P**rojection, **C**olor, **D**ate/Source

### Cartographic Methods
**T**hematic, **C**horopleth, **P**roportional Symbol, **D**ot Density, **I**soline, **R**aster, **V**ector

### 3 Projection Types
**C**ylindrical (Equator), **C**onic (Mid-latitude), **P**lanar (Polar)

### 3 Data Structures
**V**ector (discrete), **R**aster (continuous), **T**IN (terrain)

### Vector Analysis Types
**L**ocation Query, **B**uffer, **O**verlay, **N**etwork, **P**roximity

### Raster Analysis Types
**S**urface, **I**nterpolation, **S**uitability, **C**hange, **D**ensity, **H**ydrology, **V**isibility, **C**lassification

### DB Design Stages
**C**onceptual (what), **L**ogical (how organized), **P**hysical (how stored)

### Surface Methods
**I**nterpolation, **C**ontour, **T**IN, **R**aster, **S**lope, **A**spect, **H**illshade, **K**riging, **S**pline

### Hydrology Steps
**D**EM -> **F**ill Sinks -> **F**low Direction -> **F**low Accumulation -> **S**tream -> **W**atershed -> **F**lood Risk

---

## Applications of GIS (Nepal Context)
| Sector | Application |
|--------|------------|
| Urban Planning | Kathmandu road expansion |
| Disaster Management | Landslide mapping in hills |
| Agriculture | Crop planning in Terai |
| Forest Management | Forest monitoring |
| Water Resources | Irrigation planning |
| Land Administration | Digital cadastral mapping |
| Health | COVID-19 case mapping |
| Transportation | Road network planning |
| Environment | Air pollution in Kathmandu |
| Hydrology | Flood prediction |
| Energy | NEA power line mapping |
| E-Governance | Digital municipality mapping |
