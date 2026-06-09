import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

interface MultimediaNotesScreenProps {
  onBack: () => void
}

export default function MultimediaNotesScreen({ onBack }: MultimediaNotesScreenProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Multimedia Systems — Complete Notes</h1>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        {/* ===== UNIT 1 ===== */}
        <Section title="UNIT 1: Introduction to Multimedia (6 Hrs)">
          <SubSection title="Definition">
            <p><strong>Multimedia</strong> = combination of text, graphic, sound, animation, and video delivered interactively to the user by electronic or digital means.</p>
            <p>Multimedia is the field concerned with computer-controlled integration of text, graphics, drawings, still and moving images (Video), animation, audio, and any other media where information can be represented, stored, transmitted, and processed digitally.</p>
          </SubSection>

          <SubSection title="History Milestones">
            <Table
              headers={['Year', 'Event']}
              rows={[
                ['1895', 'Gugliemo Marconi: first wireless radio transmission'],
                ['1969', 'Nelson & Van Dam: hypertext editor; Birth of Internet'],
                ['1971', 'Email invented'],
                ['1985', 'Negroponte, Wiesner: opened MIT Media Lab'],
                ['1989', 'Tim Berners-Lee proposed WWW to CERN'],
                ['1994', 'Jim Clark and Marc Andreesen: Netscape'],
                ['1995', 'Java for platform-independent development (Duke - first applet)'],
                ['1996', 'Microsoft Internet Explorer'],
              ]}
            />
          </SubSection>

          <SubSection title="Hypertext vs Hypermedia">
            <p><strong>Hypertext:</strong> Text containing links to other texts (invented by Ted Nelson, ~1965)</p>
            <p><strong>Hypermedia:</strong> Not constrained to text; includes graphics, images, sound, video (e.g., WWW, PowerPoint, Adobe Acrobat)</p>
          </SubSection>

          <SubSection title="Global Structure of Multimedia — Three Domains">
            <Table
              headers={['Domain', 'Description']}
              rows={[
                ['Application Domain', 'Software tools, development methodology for multimedia projects'],
                ['System Domain', 'OS, communication/networking, database system support'],
                ['Device Domain', 'Basic concepts for processing multimedia elements and physical devices'],
              ]}
            />
          </SubSection>

          <SubSection title="Classification of Media">
            <Table
              headers={['Type', 'Description', 'Examples']}
              rows={[
                ['Perception Media', 'Help humans sense environment', 'Text, image, video, music, speech'],
                ['Representation Media', 'Internal computer representation', 'ASCII, JPEG, MPEG, PAL/NTSC'],
                ['Presentation Media', 'I/O devices for information', 'Screen, speaker, keyboard, mouse'],
                ['Storage Media', 'Data carriers', 'Hard disk, CD-ROM, DVD'],
                ['Transmission Media', 'Data transmission carriers', 'Wired/wireless networks'],
                ['Information Exchange Media', 'Storage + transmission', 'Electronic mailing system'],
              ]}
            />
          </SubSection>

          <SubSection title="Multimedia System Properties">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Discrete and Continuous Media</strong> — must utilize both</li>
              <li><strong>Independent Media</strong> — media types may be tightly or loosely coupled</li>
              <li><strong>Communication Capability</strong> — distribute beyond single computer boundary</li>
              <li><strong>Integration</strong> — high integration if changing one element affects others</li>
            </ol>
          </SubSection>

          <SubSection title="Characteristics">
            <ol className="list-decimal space-y-1 pl-5">
              <li>Must be <strong>computer controlled</strong></li>
              <li><strong>Integrated</strong></li>
              <li>Information must be <strong>digitally represented</strong></li>
              <li>Interface must be <strong>interactive</strong></li>
            </ol>
          </SubSection>

          <SubSection title="Components">
            <Table
              headers={['Component', 'Examples']}
              rows={[
                ['Capture Devices', 'Video camera, microphone, keyboard, mouse, tablet, VR devices'],
                ['Digitizing Hardware', 'Hard disks, CD-ROMs, DVD-ROMs'],
                ['Communication Networks', 'LAN, Intranets, Internet, high-speed networks'],
                ['Computer Systems', 'Multimedia desktops, workstations, MPEG/Video/DSP hardware'],
                ['Display Devices', 'CD-quality speakers, HDTV, SVGA, Hi-Res monitors'],
              ]}
            />
          </SubSection>

          <SubSection title="Challenges">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Distributed Networks</strong> — timing, storage, delivery challenges</li>
              <li><strong>Temporal relationship</strong> — maintaining correct timing between media elements</li>
              <li><strong>Simultaneous Rendering</strong> — playing media continuously together</li>
              <li><strong>Sequencing</strong> — keeping frames in correct order/timeframe</li>
              <li><strong>Synchronization (Lip sync)</strong> — aligning separate streams (audio + video)</li>
            </ul>
          </SubSection>

          <SubSection title="Synchronization Types">
            <Table
              headers={['Type', 'Description']}
              rows={[
                ['Intra-media', 'Within one medium (correct frame rate, ordered audio samples)'],
                ['Inter-media', 'Across different media (audio matched with video, speech with captions)'],
              ]}
            />
            <p className="mt-1"><strong>Solutions:</strong> RTP (timing info), NTP (clock sync), Buffering, QoS</p>
          </SubSection>

          <SubSection title="Building Blocks">
            <p>Text, Audio, Animation, Video, Graphics</p>
          </SubSection>

          <SubSection title="Scope of Applications">
            <Table
              headers={['Domain', 'Applications']}
              rows={[
                ['Business', 'Sales/marketing, trade shows, staff training, kiosks'],
                ['Education', 'Courseware, e-learning, distance learning, simulations'],
                ['Entertainment', 'Games, movies, video-on-demand'],
                ['Home', 'Television, satellite TV, SMS services'],
                ['Public Places', 'Information kiosks, smart cards, security'],
                ['Other', 'Digital video editing, videoconferencing, VR, interactive TV'],
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== UNIT 2 ===== */}
        <Section title="UNIT 2: Sound / Audio System (5 Hrs)">
          <SubSection title="Sound Terminology">
            <Table
              headers={['Term', 'Description']}
              rows={[
                ['Frequency', 'Reciprocal of period; measured in Hertz (Hz)'],
                ['Infrasonic', '0 to 20 Hz'],
                ['Audio Sonic', '20 Hz to 20 kHz (human hearing range)'],
                ['Ultrasonic', '20 kHz to 1 GHz'],
                ['Amplitude', 'Perceived as loudness/volume'],
              ]}
            />
          </SubSection>

          <SubSection title="Producing Digital Audio">
            <p>A computer measures amplitude of waveform at regular intervals → <strong>samples</strong>.</p>
            <p>Audio signals converted to digital via <strong>ADC (Analog-to-Digital Converter)</strong>.</p>
            <p><strong>Nyquist Sampling Theorem:</strong> For lossless digitization, the sampling rate should be at least twice the maximum frequency. CD standard: 44,100 Hz.</p>
            <p><strong>Quantization:</strong> 8-bit → 256 values; 16-bit → 65,536 values (CD quality)</p>
          </SubSection>

          <SubSection title="MIDI (Musical Instrument Digital Interface)">
            <p>Connectivity standard for musical instruments and computers (developed early 1980s).</p>
            <p><strong>Hardware:</strong> physical connection, MIDI port, cable, electronic signals</p>
            <p><strong>Data format:</strong> digital MIDI messages</p>
          </SubSection>

          <SubSection title="MIDI System Components">
            <Table
              headers={['Component', 'Description']}
              rows={[
                ['Synthesizers', 'Converts MIDI note messages to audio signal'],
                ['Sequencers', 'Storage server for generated MIDI data'],
                ['Controllers', 'Devices for manipulating MIDI software messages'],
                ['Network', 'Interconnection of MIDI devices'],
              ]}
            />
          </SubSection>

          <SubSection title="MIDI Messages">
            <Table
              headers={['Type', 'Subtype', 'Description']}
              rows={[
                ['Channel Message', 'Channel Voice', 'Performance data (note on/off, pressure, control change)'],
                ['Channel Message', 'Channel Mode', 'Device response (local control, omni mode)'],
                ['System Message', 'System Real Time', 'Timing sync (system reset, MIDI clock)'],
                ['System Message', 'System Common', 'Commands for sequencer/synthesizer'],
                ['System Message', 'System Exclusive', 'Hardware-specific functions'],
              ]}
            />
          </SubSection>

          <SubSection title="MIDI vs Digital Audio">
            <Table
              headers={['Aspect', 'MIDI', 'Digital Audio']}
              rows={[
                ['Data type', 'Instructions/messages', 'Actual waveform samples'],
                ['File size', 'Very small', 'Large'],
                ['Editability', 'Easy (change notes, instruments)', 'Limited'],
                ['Sound quality', 'Depends on synthesizer', 'Fixed at recording'],
                ['Storage', 'Note events', 'PCM samples'],
              ]}
            />
          </SubSection>

          <SubSection title="Speech Terminology">
            <Table
              headers={['Term', 'Definition']}
              rows={[
                ['Fundamental frequency', 'Lowest periodic spectral component of voiced sound'],
                ['Phone', 'Smallest speech unit (m in "mat", b in "bat")'],
                ['Allophones', 'Variants of a phone (aspirated vs unaspirated p)'],
                ['Morph', 'Smallest speech unit carrying meaning'],
                ['Voiced sounds', 'm, v, l (vocal cords vibrate)'],
                ['Unvoiced sounds', 'f, s (vocal cords open)'],
              ]}
            />
          </SubSection>

          <SubSection title="Speech Generation Methods">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Prerecorded speech</strong> — PCM samples, playback with compression</li>
              <li><strong>Sound Concatenation</strong> — text → transcription → sound script → speech signal</li>
            </ul>
          </SubSection>

          <SubSection title="Speech Analysis">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Speaker identification/verification</strong> — acoustic fingerprint</li>
              <li><strong>Speech recognition</strong> — determine what was said (text generation)</li>
              <li><strong>Emotion analysis</strong> — how something was said</li>
            </ul>
          </SubSection>

          <SubSection title="Speech Transmission">
            <Table
              headers={['Method', 'Bit Rate', 'Description']}
              rows={[
                ['PCM', '64 Kbit/s', 'No speech-specific properties; telephone quality'],
                ['DPCM', '56 Kbit/s', 'Differential PCM'],
                ['ADPCM', '32 Kbit/s', 'Adaptive DPCM'],
                ['Source Encoding', '—', 'Exploits signal characteristics; silence suppression'],
                ['Recognition-Synthesis', '~50 bit/s', 'Analyze at sender, synthesize at receiver; only formants transmitted'],
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== UNIT 3 ===== */}
        <Section title="UNIT 3: Images and Graphics (5 Hrs)">
          <SubSection title="Digital Image Representation">
            <p>Image = 2D matrix of numeric values (intensity at each point)</p>
            <p><strong>Pixel</strong> (picture element) — point at which image is sampled</p>
            <p>8-bit integers → grayscale range 0 to 255</p>
            <p><strong>File Size</strong> = W × L × n bits (W=width, L=height, n=bits per pixel)</p>
          </SubSection>

          <SubSection title="Image File Formats">
            <Table
              headers={['Format', 'Description']}
              rows={[
                ['PostScript', 'Programming language for printing graphics/text; device-independent'],
                ['GIF', 'Graphics Interchange Format; supports 256 colors'],
                ['TIFF', 'Tagged Image File Format; supports RLE, LZW, JPEG compression'],
                ['XBM/XPM', 'X11 Bitmap/Pixmap for UNIX; no compression'],
                ['BMP', 'Windows bitmap; RGB color model; no compression'],
                ['JPEG', 'Lossy compression for photographs'],
                ['PNG', 'Lossless compression; supports transparency'],
                ['SVG', 'Vector graphics format; scalable'],
              ]}
            />
          </SubSection>

          <SubSection title="Graphics Storage Formats">
            <Table
              headers={['Format', 'Description']}
              rows={[
                ['IGES', 'Initial Graphics Exchange Standard - 2D/3D CAD data transfer'],
                ['DXF', 'Autodesk CAD format (de facto standard)'],
                ['HPGL', 'Hewlett Packard Graphics Language - 2D for plotters'],
              ]}
            />
          </SubSection>

          <SubSection title="Computer Image Processing">
            <p><strong>Computer Graphics</strong> — pictorial synthesis from computer-based models</p>
            <p><strong>Image Processing</strong> — analysis/reconstruction from pictures (converse process)</p>
            <p>Components: Image Synthesis (generation) + Image Analysis (recognition)</p>
          </SubSection>

          <SubSection title="Image Synthesis Applications">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>User Interface</strong> — point-and-click, menu-driven</li>
              <li><strong>Office Automation & Electronic Publishing</strong> — desktop publishing, hypermedia</li>
              <li><strong>Simulation & Animation</strong> — scientific visualization, entertainment, movies</li>
            </ul>
          </SubSection>

          <SubSection title="Dynamics in Graphics">
            <p><strong>Motion Dynamics</strong> — objects move relative to stationary observer or vice versa</p>
            <p><strong>Update Dynamics</strong> — change of shape, color, or other properties</p>
          </SubSection>

          <SubSection title="Framework of Interactive Graphics">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Application Model</strong> — converts primitives to graphics commands</li>
              <li><strong>Graphics System</strong> — intermediary between application and display hardware</li>
              <li><strong>Graphics Hardware</strong> — input devices (mouse, tablet) + output devices (displays)</li>
            </ol>
          </SubSection>

          <SubSection title="Dithering">
            <p>Process to produce shades of gray or tints using fewer colors. Uses eye's spatial integration capability.</p>
            <p><strong>Techniques:</strong> Clustered-dot ordered dithering (halftoning — laser printers), Dispersed-dot ordered dithering (CRT displays)</p>
          </SubSection>

          <SubSection title="Image Analysis">
            <p>Extracting descriptions of objects from images.</p>
            <p><strong>Sub-areas:</strong> Image Enhancement (noise elimination, contrast), Pattern Detection & Recognition, Scene Analysis & Computer Vision</p>
            <p><strong>Applications:</strong> Criminology, Biometrics, Aerial surveillance, Medicine, Space probes, Machine vision</p>
          </SubSection>

          <SubSection title="Image Recognition (6 Steps)">
            <Table
              headers={['Step', 'Description']}
              rows={[
                ['1. Formatting', 'Capture → digital representation (pixels)'],
                ['2. Conditioning', 'Eliminate/suppress noise'],
                ['3. Labeling', 'Edge detection, boundary determination'],
                ['4. Grouping', 'Arrange pixels into shapes (line fitting, curves)'],
                ['5. Extracting', 'Compute attributes (centroid, orientation, intensity)'],
                ['6. Matching', 'Compare with predefined objects (template, neural)'],
              ]}
            />
          </SubSection>

          <SubSection title="Image Transmission Methods">
            <Table
              headers={['Method', 'Description']}
              rows={[
                ['Raw Image Data', 'Direct digital format; Size = resolution × quantization bits'],
                ['Compressed Image Data', 'Compressed before transmission (JPEG, MPEG)'],
                ['Symbolic Image Data', 'Primitives + attributes; size = structure size'],
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== UNIT 4 ===== */}
        <Section title="UNIT 4: Video and Animation (6 Hrs)">
          <SubSection title="Digital Video">
            <p>Motion represented by rapid succession of still pictures (frames). Discrete sequence perceived as continuous (persistence of vision).</p>
          </SubSection>

          <SubSection title="Video Signal Representation">
            <p><strong>Aspect ratio</strong> = picture width / height (conventional TV: 4/3 = 1.33)</p>
            <p><strong>Resolution:</strong> vertical = elements in height; horizontal = elements in width</p>
            <p><strong>Luminance & Chrominance:</strong> brightness (Y) + color information (Cb, Cr)</p>
            <p><strong>Continuity of Motion:</strong> frame rate &gt; 15 fps needed; smooth at 30 fps</p>
            <p><strong>Flicker:</strong> minimum 50 refresh cycles/sec; alleviated via display refresh buffer</p>
          </SubSection>

          <SubSection title="TV Standards">
            <Table
              headers={['Standard', 'Frame Rate', 'Used In']}
              rows={[
                ['NTSC', '30 fps (29.97 Hz)', 'US/Japan'],
                ['PAL', '25 fps (25 Hz)', 'Europe/Asia'],
              ]}
            />
          </SubSection>

          <SubSection title="Video Signal Encoding">
            <Table
              headers={['Encoding', 'Description']}
              rows={[
                ['RGB', 'Separate signals for Red, Green, Blue'],
                ['YUV', 'Luminance (Y) + two chrominance (U, V)'],
                ['YIQ', 'Similar to YUV, used in NTSC'],
                ['Composite', 'All info combined into one signal; NTSC bandwidth: 4.2 MHz'],
              ]}
            />
          </SubSection>

          <SubSection title="Digitization">
            <p><strong>Sampling</strong> — dividing picture at M×N array of points</p>
            <p><strong>Quantizing</strong> — dividing signal into range of gray level values</p>
          </SubSection>

          <SubSection title="Computer Video Standards">
            <Table
              headers={['Standard', 'Resolution', 'Colors']}
              rows={[
                ['CGA', '320×200', '4 colors'],
                ['EGA', '640×350', '16 colors'],
                ['VGA', '640×480', '256 colors'],
                ['SVGA', '1024×768', '256 colors'],
              ]}
            />
          </SubSection>

          <SubSection title="Computer-Based Animation">
            <p><strong>Animation:</strong> Process of making something look alive</p>
            <p><strong>Categories:</strong> Motion Dynamics (position change) + Update Dynamics (shape/size change)</p>
            <p>Also includes changes in lighting, camera position, orientation, focus</p>
          </SubSection>

          <SubSection title="Basic Process of Animation">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Input process</strong> — digitize key frame drawings</li>
              <li><strong>Composition stage</strong> — combine foreground/background to generate frames</li>
              <li><strong>Inbetween process</strong> — interpolation between key frames</li>
              <li><strong>Changing colors</strong> — using CLUT (Color Look-Up Table) + double buffering</li>
            </ol>
          </SubSection>

          <SubSection title="Animation Languages">
            <Table
              headers={['Type', 'Description', 'Example']}
              rows={[
                ['Linear List Notations', 'Events by start/end frame + action', 'Scefo'],
                ['General-purpose Languages', 'Animation in programming language', 'ASAS'],
                ['Graphical Languages', 'Visual description of animation', 'GENESYS, DIAL'],
              ]}
            />
          </SubSection>

          <SubSection title="Timeline vs Frame-Based Animation">
            <p><strong>Timeline-based:</strong> Visual representation of event sequence over time; layers represent elements; keyframes mark start/end; smooth transitions (tweens)</p>
            <p><strong>Frame-based:</strong> Each frame created individually; series of slightly different images; maximum control; used in hand-drawn and stop motion</p>
          </SubSection>

          <SubSection title="Tweening">
            <p><strong>Tweening</strong> = "in-betweening" — automatically generates intermediate frames between keyframes</p>
            <p><strong>Types:</strong> Motion Tween (position, rotation, scale), Shape Tween (morphing), Classic Tween (traditional + automated)</p>
          </SubSection>

          <SubSection title="Methods of Controlling Animation">
            <Table
              headers={['Method', 'Description']}
              rows={[
                ['Full Explicit Control', 'Animator specifies everything (key frames + interpolation)'],
                ['Procedural Control', 'Object communication determines properties'],
                ['Constraint-based Systems', 'Motion determined by constraints/contact'],
                ['Tracking Live Action', 'Trajectories from real action (rotoscoping)'],
                ['Kinematics & Dynamics', 'Position/velocity + physical laws'],
              ]}
            />
          </SubSection>

          <SubSection title="Display of Animation">
            <p>Minimum 10-15 fps for smooth effect. <strong>Double buffering</strong> removes distracting scan-conversion effects — alternate between image0 and image1 in frame buffer.</p>
          </SubSection>

          <SubSection title="Transmission of Animation">
            <Table
              headers={['Method', 'Pros', 'Cons']}
              rows={[
                ['Symbolic Representation', 'Smaller size', 'Longer display time'],
                ['Pixmap Representation', 'Shorter display time', 'Larger size'],
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== UNIT 5 ===== */}
        <Section title="UNIT 5: Data Compression">
          <SubSection title="Need for Data Compression">
            <p>Uncompressed graphics, audio, video require huge storage. Even CD/DVD technology is insufficient for raw video. 90% of raw audio can be deleted without quality loss.</p>
            <p><strong>Important standards:</strong> JPEG (images), H.263 (video), MPEG (video/audio), QuickTime</p>
          </SubSection>

          <SubSection title="Storage Requirements">
            <ul className="list-disc space-y-1 pl-5">
              <li>Telephone quality audio (8 kHz, 8-bit): 64 kbits/sec</li>
              <li>CD quality stereo audio (44.1 kHz, 16-bit): 705.6 kbits/sec</li>
              <li>1080p video (1 min): ~10-15 GB</li>
              <li>Raw 12MP image: ~36 MB</li>
            </ul>
          </SubSection>

          <SubSection title="Lossless vs Lossy Compression">
            <Table
              headers={['Type', 'Description', 'Examples']}
              rows={[
                ['Lossless', 'Exact original data recovered', 'PNG, FLAC, ZIP'],
                ['Lossy', 'Some data permanently removed', 'MP3, JPEG, H.264'],
              ]}
            />
          </SubSection>

          <SubSection title="Source, Entropy, and Hybrid Coding">
            <p><strong>Source Coding (Lossy):</strong> Considers semantics; transforms time → frequency domain (DPCM, Delta Mod, FFT, DFT, Sub-band coding)</p>
            <p><strong>Entropy Coding (Lossless):</strong> Ignores semantics, views as digital data sequence (Run-length, Huffman, Arithmetic)</p>
            <p><strong>Hybrid Coding:</strong> Combines source + entropy coding (MPEG, JPEG, H.261, DVI)</p>
          </SubSection>

          <SubSection title="Run-Length Encoding">
            <p>For data with long substrings of same character. Transmits character + count of repetitions.</p>
            <p className="font-mono text-xs">AAAAABBBTTTTTTMMMMMMMM → A!5BBBT!6M!8</p>
          </SubSection>

          <SubSection title="Huffman Coding">
            <p>Variable length coding — assigns fewer bits to more probable characters. Builds binary tree from character probabilities.</p>
            <p className="font-mono text-xs">p(A)=0.16, p(B)=0.51, p(C)=0.09, p(D)=0.13, p(E)=0.11 → w(A)=001, w(B)=1, w(C)=011, w(D)=000, w(E)=010</p>
          </SubSection>

          <SubSection title="Arithmetic Coding">
            <p>Single codeword for entire string (unlike Huffman's per-character). Divides range [0,1) into segments based on character probabilities.</p>
          </SubSection>

          <SubSection title="Major Steps of Data Compression">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Preparation</strong> — analog to digital conversion, divide into blocks (4×4 or 8×8)</li>
              <li><strong>Processing</strong> — time → frequency domain using DCT</li>
              <li><strong>Quantization</strong> — define discrete levels, reduce precision</li>
              <li><strong>Entropy Encoding</strong> — lossless compression (RLE or Huffman)</li>
            </ol>
          </SubSection>

          <SubSection title="JPEG Compression Steps">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Block Preparation</strong> — RGB → YIQ: Y=0.30R+0.59G+0.11B, I=0.60R-0.28G-0.32B, Q=0.21R-0.52G+0.31B</li>
              <li><strong>DCT</strong> — 8×8 matrix of DCT coefficients; (0,0) = average value</li>
              <li><strong>Quantization</strong> — divide coefficients by weights; higher frequencies dropped</li>
              <li><strong>Differential Quantization</strong> — replace DC component with difference from previous block</li>
              <li><strong>Run-length Encoding</strong> — zigzag scanning pattern, compress with RLE</li>
              <li><strong>Statistical Encoding</strong> — Huffman coding</li>
            </ol>
          </SubSection>

          <SubSection title="JPEG Modes">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Lossy Sequential DCT-based (Baseline)', 'Must be supported by every decoder; sequential drawing'],
                ['Expanded Lossy DCT-based', '12-bit + 8-bit; progressive (rough → refined)'],
                ['Lossless Mode', 'Low compression, perfect reconstruction; predictive (no DCT)'],
                ['Hierarchical Mode', 'Accommodates multiple resolutions'],
              ]}
            />
          </SubSection>

          <SubSection title="Progressive Encoding Approaches">
            <p><strong>Spectral Selection:</strong> low frequencies first, then higher</p>
            <p><strong>Successive Approximation:</strong> most-significant bits first, then less-significant</p>
          </SubSection>

          <SubSection title="MPEG Compression">
            <p>Established 1988 by ISO/IEC. Uses <strong>Motion-Compensated DCT</strong> algorithms.</p>
            <p>Max data rate: 1,856,000 bits/sec. Audio: 32-448 Kbits/sec.</p>
          </SubSection>

          <SubSection title="MPEG Standards">
            <Table
              headers={['Standard', 'Purpose']}
              rows={[
                ['MPEG-1', 'Storage/retrieval of moving pictures + audio on storage media'],
                ['MPEG-2', 'Digital television'],
                ['MPEG-4', 'Multimedia applications'],
                ['MPEG-7', 'Content representation for information search'],
                ['MPEG-21', 'Metadata for audio/video files'],
              ]}
            />
          </SubSection>

          <SubSection title="MPEG Algorithms">
            <ol className="list-decimal space-y-1 pl-5">
              <li><strong>Temporal Prediction</strong> — exploits redundancy between video pictures</li>
              <li><strong>Frequency Domain Decomposition</strong> — DCT exploits spatial redundancy</li>
              <li><strong>Quantization</strong> — reduces bit rate, minimizes perceptual loss</li>
              <li><strong>Variable-length Coding</strong> — exploits statistical redundancy</li>
            </ol>
          </SubSection>
        </Section>

        {/* ===== UNIT 6 ===== */}
        <Section title="UNIT 6: Abstractions for Programming">
          <SubSection title="Abstraction Levels">
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-xs">
                <tbody>
                  {[
                    ['Application Level', '↑'],
                    ['Object-Oriented Languages', '↑'],
                    ['Higher Procedural Languages', '↑'],
                    ['System Software', '↑'],
                    ['Toolkits', '↑'],
                    ['Libraries', '↑'],
                    ['Device Drivers', '↑'],
                    ['Device Level', ''],
                  ].map(([level, arrow], i) => (
                    <tr key={i} className="border-t even:bg-muted/30">
                      <td className="px-3 py-1.5 font-medium">{level}</td>
                      <td className="px-3 py-1.5 text-muted-foreground">{arrow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection title="Levels Description">
            <Table
              headers={['Level', 'Description']}
              rows={[
                ['Device', 'Component for processing continuous media'],
                ['Library', 'Functions for hardware control (e.g., OpenGL)'],
                ['Device Drivers', 'Bounding multimedia devices'],
                ['System Software', 'Processing continuous data (schedulers: monotonic, EDF)'],
                ['Higher Procedural Language', 'Language with abstractions of multimedia data'],
                ['Object-Oriented Language', 'Class hierarchy for multimedia manipulation'],
              ]}
            />
          </SubSection>

          <SubSection title="OpenGL">
            <p>2D/3D graphics API (Silicon Graphics); cross-platform (PCs, Workstations, Supercomputers); stable, reliable, portable, scalable.</p>
          </SubSection>

          <SubSection title="System Software Concepts">
            <p><strong>Data as time capsules:</strong> each LDU carries data type, value, valid lifespan (e.g., video frame = 40ms)</p>
            <p><strong>Data as streams:</strong> continuous flow between source and sink</p>
          </SubSection>

          <SubSection title="DirectX">
            <p>Low-level APIs for high-performance apps. Direct access to hardware services.</p>
            <Table
              headers={['Component', 'Purpose']}
              rows={[
                ['DirectDraw', '2D graphics'],
                ['Direct3D', '3D graphics'],
                ['DirectSound', '3D sound, mixing, playback'],
                ['DirectPlay', 'Network multiplayer games'],
                ['DirectInput', 'Peripherals (joysticks, data gloves)'],
              ]}
            />
            <p className="mt-1"><strong>Implementation:</strong> HAL (Hardware Abstraction Layer), HEL (Hardware Emulation Layer), Media Layer</p>
          </SubSection>

          <SubSection title="Toolkits">
            <p>Control audio/video data processing; hide process structures; abstract from physical layer. Client-server paradigm.</p>
          </SubSection>

          <SubSection title="Higher Programming Languages">
            <p><strong>Media as types</strong> — e.g., OCCAM-2 (transputer programming)</p>
            <p><strong>Media as files</strong> — treat streams as file handles</p>
            <p><strong>Media as processes</strong> — map continuous media to processes</p>
            <p><strong>Requirements:</strong> Support parallel processing, asynchronous instructions, inter-process communication with QoS awareness</p>
          </SubSection>

          <SubSection title="Object-Oriented Approaches">
            <p>Reduce complexity via data encapsulation, inheritance, class/object definitions.</p>
            <p><strong>Multimedia OO Classes:</strong> Devices as classes, Processing units as classes (Source, Destination), BMCs/BMOs, CMCs/CMOs, Media as class hierarchies</p>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-xs">
                <tbody>
                  <tr className="border-t"><td className="px-3 py-1 font-medium pl-6">Medium</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 font-medium pl-10">Acoustic_Medium</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 pl-14">Music (Opus → Score → Audio_Block → Sample_Value)</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 pl-14">Speech</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 font-medium pl-10">Optical_Medium</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 pl-14">Video (Video_Scene → Image → Image_Segment → Pixel)</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 pl-14">Animation</td></tr>
                  <tr className="border-t even:bg-muted/30"><td className="px-3 py-1 pl-14">Text</td></tr>
                </tbody>
              </table>
            </div>
          </SubSection>
        </Section>

        {/* ===== UNIT 7 ===== */}
        <Section title="UNIT 7: Multimedia Design">
          <SubSection title="Development Phases">
            <Table
              headers={['Phase', 'Activities']}
              rows={[
                ['1. Analysis', 'Define goals, audience, requirements'],
                ['2. Design', 'Storyboards, flowcharts, wireframes, technical design'],
                ['3. Development', 'Graphics, audio, video, animations; programming'],
                ['4. Implementation', 'Integrate all components; optimize'],
                ['5. Evaluation & Testing', 'QA, user testing, performance testing, validation'],
                ['6. Maintenance', 'Updates and fixes after deployment'],
              ]}
            />
          </SubSection>

          <SubSection title="Development Team">
            <Table
              headers={['Role', 'Responsibility']}
              rows={[
                ['Project Manager', 'Oversees project, budget, timeline'],
                ['Multimedia Designers', 'Visual elements, animations, layouts'],
                ['Content Writers', 'Scripts, text, narrative'],
                ['Programmers / Developers', 'Code, interactive features'],
                ['Audio/Video Specialists', 'Produce/edit audio/video'],
                ['QA Testers', 'Functionality and usability testing'],
                ['SMEs', 'Domain expertise'],
              ]}
            />
          </SubSection>

          <SubSection title="Analysis Phase Details">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Identifying Goals</strong> — understand project aims</li>
              <li><strong>Audience Analysis</strong> — understand target users</li>
              <li><strong>Requirement Gathering</strong> — from stakeholders</li>
              <li><strong>Feasibility Study</strong> — technical, financial, operational</li>
              <li><strong>Scope Definition</strong> — prevent scope creep</li>
            </ul>
          </SubSection>

          <SubSection title="Design Phase Activities">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Storyboarding</strong> — visual representation of screens/scenes</li>
              <li><strong>Flowcharting</strong> — navigation and flow mapping</li>
              <li><strong>Wireframing</strong> — layout and interface elements</li>
              <li><strong>Technical Design</strong> — databases, software architecture</li>
            </ul>
          </SubSection>

          <SubSection title="Evaluation & Testing">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Quality Assurance Testing</strong> — systematic bug/error detection</li>
              <li><strong>User Testing</strong> — feedback from real users</li>
              <li><strong>Performance Testing</strong> — under different conditions</li>
              <li><strong>Validation</strong> — meeting specified requirements</li>
            </ul>
          </SubSection>

          <SubSection title="Multimedia User Interface Design">
            <p><strong>UI:</strong> Layer of software with which end users interact.</p>
            <p><strong>Principles:</strong> Consistency, Clarity, Context, Navigation, Search, Personalization, Learnability, Flexibility</p>
          </SubSection>

          <SubSection title="General Design Issues">
            <ol className="list-decimal space-y-1 pl-5">
              <li>Determine appropriate information content</li>
              <li>Represent essential characteristics of information</li>
              <li>Represent communicative intent</li>
              <li>Choose proper media for presentation</li>
              <li>Provide interactive exploration</li>
            </ol>
          </SubSection>

          <SubSection title="Presentation Design Knowledge">
            <p><strong>Content Selection</strong> — choose what to present (simple, revealing)</p>
            <p><strong>Media Selection</strong> — governed by information characteristics (graphs for numbers, audio for narration)</p>
            <p><strong>Coordination</strong> — encoding techniques, presentation objects, multiple displays</p>
          </SubSection>

          <SubSection title="Effective HCI Considerations">
            <ul className="list-disc space-y-1 pl-5">
              <li>Context</li>
              <li>Linkage to world beyond display</li>
              <li>Evaluation against other interfaces</li>
              <li>Interactive capabilities</li>
              <li>Separability of UI from backend</li>
            </ul>
          </SubSection>
        </Section>

        {/* ===== UNIT 8 ===== */}
        <Section title="UNIT 8: Multimedia Applications">
          <SubSection title="Media Preparation">
            <p>Performed by multimedia I/O hardware and supporting software.</p>
            <p><strong>Audio Support:</strong> Multiple channel digital sound tracks (6-channel: front-left, center, front-right, surround-left, surround-right, sub-woofer). VR sound via helmet.</p>
            <p><strong>Video Support:</strong> High-resolution at 60 fps goal. Displays: HMD, Surround displays, Digital Holography.</p>
          </SubSection>

          <SubSection title="Input/Recognition Devices">
            <Table
              headers={['Device Type', 'Examples']}
              rows={[
                ['Scanner Devices', 'Photo scanner, Image scanner, Photo CD'],
                ['Recognition Devices', 'OCR, Image recognition, Speech recognition'],
                ['Tracking Devices', 'Electromagnetic, Ultrasound, Optical, Eye tracking'],
                ['Motion-based Devices', 'Passive infrared, Microwave, Ultrasonic, Vibration, Video motion sensor'],
              ]}
            />
          </SubSection>

          <SubSection title="Media Composition (Editors)">
            <Table
              headers={['Editor Type', 'Purpose']}
              rows={[
                ['Text editors', 'Font, styles, effects'],
                ['Graphics editors', 'Graphical objects manipulation'],
                ['Image editors', 'Scaling, resolution, intensity'],
                ['Animation editors', '2D/3D animation'],
                ['Sound editors', 'Recording, playback, editing'],
                ['Video editors', 'Motion video editing'],
              ]}
            />
          </SubSection>

          <SubSection title="Authoring Tools">
            <p>Process: Concept → Design → Content Collection → Assembly → Testing</p>
            <p><strong>Examples:</strong> Mediascript, IconAuthor, ToolBook, Authorware, PowerPoint, MovieWorks</p>
          </SubSection>

          <SubSection title="Media Communication (Tele-services)">
            <Table
              headers={['Category', 'Sub-type', 'Examples']}
              rows={[
                ['Interactive', 'Conversational', 'Video conference'],
                ['Interactive', 'Messaging', 'Mailing'],
                ['Interactive', 'Retrieval', 'Document retrieval'],
                ['Interactive', 'Tele-operation', 'Tele-robotics'],
                ['Interactive', 'Transaction', 'Credit card, ATM'],
                ['Distribution', 'Without user control', 'TV/radio broadcasting'],
                ['Distribution', 'With user control', 'Video-on-demand, Pay-per-view'],
              ]}
            />
          </SubSection>

          <SubSection title="Media Entertainment">
            <p><strong>Virtual Reality:</strong> 3D interactive (not passive). Uses head-mounted displays or CRTs. Provides sense of presence.</p>
            <p><strong>Interactive Video:</strong> Interactive TV, Video-on-demand (VOD), Interactive audio (CD-on-demand), Games (tele-games)</p>
          </SubSection>

          <SubSection title="Other Applications">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Telemedicine</strong> — remote diagnosis, surgery, consultation</li>
              <li><strong>E-learning</strong> — online courses, virtual classrooms, interactive modules</li>
              <li><strong>Digital Video Editing</strong> — non-linear editing systems</li>
              <li><strong>Video Conferencing</strong> — real-time audio/video communication</li>
              <li><strong>Video-on-Demand (VOD)</strong> — users select and watch video content on demand</li>
            </ul>
          </SubSection>
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
