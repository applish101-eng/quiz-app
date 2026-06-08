import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

interface GisNotesScreenProps {
  onBack: () => void
}

export default function GisNotesScreen({ onBack }: GisNotesScreenProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">GIS Summary Notes</h1>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* UNIT 1 */}
        <Section title="UNIT 1: Introduction">
          <SubSection title="Definition of GIS">
            <p>GIS = Computer-based system to <strong>collect, store, analyze, and visualize</strong> spatial and geographic data to support decision-making.</p>
          </SubSection>

          <SubSection title="12 Functions of GIS">
            <Table
              headers={['#', 'Function', 'Meaning', 'Example']}
              rows={[
                ['1', 'Data Collection', 'Gather data from GPS, satellites, surveys', 'School coordinates via GPS'],
                ['2', 'Data Storage', 'Store geographic data in databases', 'Digital land records'],
                ['3', 'Data Management', 'Organize & update data systematically', 'Updating population data'],
                ['4', 'Data Manipulation', 'Edit/convert raw data', 'Paper maps to digital maps'],
                ['5', 'Data Integration', 'Combine data from multiple sources', 'Satellite images + census data'],
                ['6', 'Spatial Analysis', 'Analyze relationships between features', 'Finding flood-prone areas'],
                ['7', 'Buffer Analysis', 'Create zones around features', 'Buffer zone around a river'],
                ['8', 'Overlay Analysis', 'Overlay multiple layers', 'Soil + land use maps'],
                ['9', 'Network Analysis', 'Analyze routes & connectivity', 'Shortest delivery route'],
                ['10', 'Data Visualization', 'Present as maps, charts, graphs', 'Population density map'],
                ['11', 'Query & Retrieval', 'Search specific geographic data', 'All hospitals in a district'],
                ['12', 'Decision Support', 'Support planning & policy-making', 'Site selection for airport'],
              ]}
            />
          </SubSection>

          <SubSection title="6 Components of GIS">
            <Table
              headers={['Component', 'Meaning', 'Examples']}
              rows={[
                ['Hardware', 'Physical devices', 'Computers, GPS, scanners, digitizers'],
                ['Software', 'Tools for analysis', 'ArcGIS, QGIS'],
                ['Data', 'Core information (most important)', 'Maps, coordinates, population'],
                ['People', 'Users and experts', 'GIS analysts, cartographers'],
                ['Methods', 'Procedures and rules', 'Collection methods, quality control'],
                ['Network', 'Data sharing system', 'Internet, cloud GIS'],
              ]}
            />
          </SubSection>

          <SubSection title="GIS as Information System">
            <p><strong>Cycle:</strong> Input → Storage → Processing → Output</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Input:</strong> Maps, GPS, remote sensing, surveys</li>
              <li><strong>Storage:</strong> Spatial database + Attribute database</li>
              <li><strong>Processing:</strong> Spatial analysis, querying, modeling</li>
              <li><strong>Output:</strong> Maps, charts, reports, visualizations</li>
            </ul>
          </SubSection>

          <SubSection title="Nature of GIS Data">
            <Table
              headers={['Type', 'Meaning', 'Examples']}
              rows={[
                ['Spatial', 'Location and shape', 'Coordinates, roads, rivers'],
                ['Attribute', 'Descriptive properties', 'Population, road type, soil type'],
                ['Integrated', 'Both combined', 'City location + its population'],
              ]}
            />
          </SubSection>

          <SubSection title="Sources of GIS Data">
            <Table
              headers={['Source', 'Description', 'Example']}
              rows={[
                ['Remote Sensing', 'Satellites, aerial photography', 'Land use mapping'],
                ['GPS', 'Accurate field coordinates', 'Road/building location'],
                ['Existing Maps', 'Scanned + digitized', 'Topographic, cadastral maps'],
                ['Field Survey', 'Direct measurement', 'Land measurement surveys'],
              ]}
            />
          </SubSection>

          <SubSection title="Recent Trends & Future">
            <p className="font-medium">Trends:</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>AI & ML Integration — automated analysis</li>
              <li>Cloud-Based GIS — better accessibility</li>
              <li>IoT Integration — real-time data</li>
              <li>3D GIS & Digital Twins — simulation</li>
              <li>Mobile & Web GIS — field data collection</li>
              <li>Location Intelligence — business analytics</li>
            </ol>
            <p className="mt-2 font-medium">Future:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Advanced AI / Autonomous GIS</li>
              <li>Enhanced real-time spatial data</li>
              <li>Climate & environmental applications</li>
              <li>Expansion into new industries</li>
              <li>Improved data quality & interoperability</li>
            </ul>
          </SubSection>
        </Section>

        {/* UNIT 2 */}
        <Section title="UNIT 2: GIS and Map">
          <SubSection title="Map Definition">
            <p>A <strong>map</strong> = Symbolic, scaled representation of selected Earth features on a flat surface.</p>
          </SubSection>

          <SubSection title="Map Characteristics (TSDL SCPC D)">
            <Table
              headers={['Element', 'Meaning']}
              rows={[
                ['Title', 'What the map represents'],
                ['Scale', 'Map distance : Real distance'],
                ['Direction', 'North arrow / compass'],
                ['Legend', 'Meaning of symbols/colors'],
                ['Symbols', 'Visual representation of features'],
                ['Coordinates', 'Latitude & Longitude'],
                ['Projection', '3D Earth to 2D flat'],
                ['Color', 'Feature identification (blue=water, green=forest)'],
                ['Date/Source', 'Data reliability info'],
              ]}
            />
          </SubSection>

          <SubSection title="Cartographic Methods">
            <Table
              headers={['Method', 'Description', 'Example']}
              rows={[
                ['Thematic', 'One specific subject', 'Population map'],
                ['Choropleth', 'Color-shaded regions by value', 'Population density'],
                ['Proportional Symbol', 'Symbol size = data value', 'City population circles'],
                ['Dot Density', 'Dots = fixed quantity', '1 dot = 100 people'],
                ['Isoline (Contour)', 'Lines of equal value', 'Temperature isotherms'],
                ['Raster', 'Grid of pixels', 'Satellite image'],
                ['Vector', 'Points, lines, polygons', 'Road/district map'],
              ]}
            />
          </SubSection>

          <SubSection title="Map Projection">
            <p><strong>Definition:</strong> Converting 3D Earth surface to 2D flat map (lat/lon → X,Y).</p>
            <p><strong>Distortion:</strong> Always present — affects shape, area, distance, direction.</p>
            <Table
              headers={['Type', 'Surface Touch', 'Best For', 'Least Distortion', 'Most Distortion', 'Example']}
              rows={[
                ['Cylindrical', 'Equator', 'World maps, navigation', 'At Equator', 'At Poles', 'Mercator'],
                ['Conic', 'Standard parallels', 'Mid-latitude, E-W countries', 'Along parallels', 'Away from parallels', 'Lambert Conformal Conic'],
                ['Planar (Azimuthal)', 'Center point', 'Polar regions', 'At Center', 'At Edges', 'Polar projection'],
              ]}
            />
          </SubSection>
        </Section>

        {/* UNIT 3 */}
        <Section title="UNIT 3: GIS Data Sources & Structures">
          <SubSection title="Data Structures: Vector vs Raster vs TIN">
            <Table
              headers={['Feature', 'Vector', 'Raster', 'TIN']}
              rows={[
                ['Representation', 'Points, Lines, Polygons', 'Grid cells (pixels)', 'Connected irregular triangles'],
                ['Best For', 'Discrete features (roads, buildings)', 'Continuous data (elevation, rainfall)', 'Terrain/elevation modeling'],
                ['Accuracy', 'High positional', 'Depends on cell size', 'High for terrain'],
                ['Storage', 'Smaller for simple features', 'Large at high resolution', 'Efficient for uneven terrain'],
                ['Zoomed In', 'Remains sharp', 'Becomes pixelated', 'Remains sharp'],
                ['Analysis', 'Network, boundary', 'Surface, spatial', '3D terrain, slope, aspect'],
              ]}
            />
          </SubSection>

          <SubSection title="Vector Data Types">
            <Table
              headers={['Type', 'Shape', 'For', 'Examples']}
              rows={[
                ['Point', 'Single coordinate', 'Position only', 'Schools, Hospitals, Wells'],
                ['Line', 'Connected points', 'Length only', 'Roads, Rivers, Power lines'],
                ['Polygon', 'Enclosed area', 'Features with area', 'Land parcels, Lakes, Boundaries'],
              ]}
            />
          </SubSection>

          <SubSection title="Georeferencing">
            <p>Assigning real-world coordinates (lat/lon) to maps/images using Ground Control Points (GCPs) like road intersections, bridges, survey markers.</p>
          </SubSection>

          <SubSection title="GIS Database Design (3 Stages)">
            <Table
              headers={['Stage', 'Focus', 'Activities']}
              rows={[
                ['Conceptual', 'What data is needed?', 'Identify entities, choose models (Point/Line/Polygon/Raster/TIN)'],
                ['Logical', 'How data is organized?', 'Define tables, relationships, attributes'],
                ['Physical', 'How data is stored?', 'File formats, indexing, storage methods'],
              ]}
            />
          </SubSection>
        </Section>

        {/* UNIT 4 */}
        <Section title="UNIT 4: Spatial Data Modeling and Analysis">
          <SubSection title="Spatial Relationships">
            <Table
              headers={['Relationship', 'Definition', 'Example', 'GIS Use']}
              rows={[
                ['Adjacency', 'Share common boundary', 'Neighboring districts', 'Boundary analysis'],
                ['Connectivity', 'Connected through network', 'Roads at intersection', 'Route finding'],
                ['Containment', 'Feature inside another', 'School inside municipality', 'Admin analysis'],
                ['Proximity', 'Nearness to each other', 'Nearest hospital', 'Distance analysis'],
                ['Intersection', 'Overlap or cross', 'Road crossing river', 'Overlay analysis'],
              ]}
            />
          </SubSection>

          <SubSection title="Vector-Based Analysis">
            <Table
              headers={['Method', 'What it does', 'Example']}
              rows={[
                ['Buffer Analysis', 'Create zone at fixed distance', '500m around road'],
                ['Overlay Analysis', 'Combine multiple layers', 'Land use + flood zone'],
                ['Network Analysis', 'Analyze connected features', 'Shortest path to hospital'],
                ['Proximity Analysis', 'Measure nearness', 'Nearest hospital to village'],
                ['Location Query', 'Select by location condition', 'Schools within municipality'],
              ]}
            />
            <p className="mt-2 font-medium">Vector Tool Categories:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Analysis:</strong> Measure & count (Points in Polygon, Distance Matrix)</li>
              <li><strong>Geoprocessing:</strong> Cut & combine maps (Clip, Buffer, Union, Intersection)</li>
              <li><strong>Geometry:</strong> Change shapes (Centroid, Convex Hull, Voronoi)</li>
              <li><strong>Research:</strong> Select & sample (Select by Location, Spatial Query)</li>
              <li><strong>Data Management:</strong> Organize & clean (Merge, Join Attributes)</li>
            </ul>
          </SubSection>

          <SubSection title="Raster-Based Analysis">
            <Table
              headers={['Type', 'Think Like', 'Example', 'Tools']}
              rows={[
                ['Surface Analysis', 'How does land look?', 'Slope, Aspect, Hillshade', 'Slope, Aspect, Hillshade'],
                ['Interpolation', 'Guess missing values', 'Rainfall between stations', 'IDW, Kriging, Spline'],
                ['Suitability', 'Best place to build', 'Best land for farming', 'Raster Calculator'],
                ['Change Detection', 'What changed over time?', 'Forest loss 2010-2025', 'Image difference'],
                ['Density', 'How crowded is it?', 'Population density', 'Kernel Density'],
                ['Hydrology', 'How water flows', 'Flood prediction', 'Flow Direction, Accumulation'],
                ['Classification', 'What type of land?', 'Forest, Water, Urban', 'Supervised classification'],
              ]}
            />
          </SubSection>
        </Section>

        {/* UNIT 5 */}
        <Section title="UNIT 5: GIS Data Modeling & Creating Maps">
          <SubSection title="Surface Modeling">
            <p>Creating a digital representation of continuously varying geographic phenomena (elevation, rainfall, temperature, pollution).</p>
            <Table
              headers={['Method', 'Purpose']}
              rows={[
                ['Interpolation', 'Estimate unknown values from known points'],
                ['Contour Mapping', 'Lines connecting equal values'],
                ['TIN', 'Terrain using connected triangles'],
                ['Raster Surface', 'Surfaces using grid cells'],
                ['Slope Analysis', 'Measure terrain steepness'],
                ['Aspect Analysis', 'Determine slope direction'],
                ['Hillshade', '3D shaded terrain effect'],
                ['Kriging', 'Advanced statistical prediction'],
                ['Spline', 'Smooth surface generation'],
              ]}
            />
          </SubSection>

          <SubSection title="Hydrology Modeling">
            <p><strong>Workflow:</strong> DEM → Fill Sinks → Flow Direction → Flow Accumulation → Stream Extraction → Watershed Delineation → Flood Risk Analysis</p>
            <Table
              headers={['Operation', 'What it does']}
              rows={[
                ['DEM', 'Raster showing ground elevation (base data)'],
                ['Fill Sinks', 'Remove depressions so water flows continuously'],
                ['Flow Direction', 'Shows where water flows from each cell'],
                ['Flow Accumulation', 'Shows how much water flows into each cell'],
                ['Stream Extraction', 'Identifies river channels from accumulation threshold'],
                ['Watershed Delineation', 'Defines land area draining to a common outlet'],
                ['Flood Risk Analysis', 'Identifies flood-prone areas'],
              ]}
            />
            <p className="mt-2"><strong>Watershed:</strong> Land area (not water body) that directs rainwater to a common outlet.</p>
          </SubSection>

          <SubSection title="Map Design & Printing">
            <p className="font-medium">Components:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Title</strong> — Theme or purpose of the map</li>
              <li><strong>Legend</strong> — Meaning of symbols and colors</li>
              <li><strong>Scale Bar</strong> — Map distance to ground distance</li>
              <li><strong>North Arrow</strong> — Indicates north direction</li>
              <li><strong>Labels</strong> — Names of places and features</li>
            </ul>
            <p className="mt-2 font-medium">Principles: Clarity, Simplicity, Balance, Accuracy, Proper Colors, Readable Text, Complete Elements</p>
            <p className="mt-1"><strong>Print Flow:</strong> Prepare Layout → Set Page Size → Check Elements → Preview → Export/Print</p>
          </SubSection>
        </Section>

        {/* MNEMONICS */}
        <Section title="Quick Memory Tricks">
          <ul className="space-y-2">
            <li><strong>Components:</strong> H ardware, S oftware, D ata, P eople, M ethods, N etwork</li>
            <li><strong>Map Elements:</strong> T itle, S cale, D irection, L egend, S ymbols, C oordinates, P rojection, C olor, D ate</li>
            <li><strong>Projections (3):</strong> C ylindrical, C onic, P lanar</li>
            <li><strong>Data Structures (3):</strong> V ector, R aster, T IN</li>
            <li><strong>DB Design:</strong> C onceptual (what), L ogical (how organized), P hysical (how stored)</li>
            <li><strong>Hydrology:</strong> D EM → F ill Sinks → F low Direction → F low Accumulation → S tream → W atershed → F lood Risk</li>
          </ul>
        </Section>

        {/* APPLICATIONS */}
        <Section title="GIS Applications (Nepal Context)">
          <Table
            headers={['Sector', 'Application']}
            rows={[
              ['Urban Planning', 'Kathmandu road expansion'],
              ['Disaster Management', 'Landslide mapping in hills'],
              ['Agriculture', 'Crop planning in Terai'],
              ['Forest Management', 'Forest monitoring by Forest Department'],
              ['Water Resources', 'Irrigation planning by Department of Irrigation'],
              ['Land Administration', 'Digital cadastral mapping in Nepal'],
              ['Health', 'COVID-19 case mapping'],
              ['Transportation', 'Road network planning'],
              ['Environment', 'Air pollution mapping in Kathmandu'],
              ['Hydrology', 'Flood prediction by Department of Hydrology'],
              ['Energy', 'NEA power line mapping'],
              ['E-Governance', 'Digital municipality mapping'],
            ]}
          />
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 border-b pb-2 text-xl font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-base font-semibold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="bg-muted">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t even:bg-muted/30">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
