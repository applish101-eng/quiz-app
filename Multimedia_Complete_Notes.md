# Multimedia Systems - Complete Notes (BCA 8th Semester)

---

## Unit 1: Introduction (6 Hrs)

### Multimedia and its Applications

**Definition:**
- **Multi** = Many, Multiple
- **Media** = Tools for representation/delivery of information (newspaper, magazine, television)

**Multimedia** is a combination of text, graphic, sound, animation, and video delivered interactively to the user by electronic or digital means.

**General Definition:**
Multimedia is the field concerned with computer-controlled integration of text, graphics, drawings, still and moving images (Video), animation, audio, and any other media where information can be represented, stored, transmitted, and processed digitally.

### History of Multimedia
- Newspaper - first mass communication multimedia (text, graphics, images)
- 1895 - Gugliemo Marconi: first wireless radio transmission
- 1901 - Radio waves beamed across Atlantic
- Television - new media for 20th century, brought video

**Important events in Multimedia Computing:**
- 1969 - Nelson & Van Dam: hypertext editor at Brown; Birth of Internet
- 1971 - Email
- 1976 - Architecture Machine Group proposed Multiple Media to DARPA
- 1983 - Backer: Electronic Book
- 1985 - Negroponte, Wiesner: opened MIT Media Lab
- 1989 - Tim Berners-Lee proposed WWW to CERN
- 1990 - K. Hooper Woolsey, Apple Multimedia Lab
- 1991 - Apple Multimedia Lab: Visual Almanac, Classroom MM Kiosk
- 1994 - Jim Clark and Marc Andreesen: Netscape
- 1995 - Java for platform-independent development (Duke - first applet)
- 1996 - Microsoft Internet Explorer

**Hypertext:** Text containing links to other texts (invented by Ted Nelson, ~1965)

**Hypermedia:** Not constrained to text; includes graphics, images, sound, video
- Examples: WWW, PowerPoint, Adobe Acrobat

### Global Structure of Multimedia

Three domains:

| Domain | Description |
|--------|-------------|
| **Application Domain** | Provides functions to develop/present multimedia projects (software tools, development methodology) |
| **System Domain** | All support for device functions (OS, communication/networking, database systems) |
| **Device Domain** | Basic concepts for processing multimedia elements and handling physical devices |

### Medium

**Medium** = means for distribution and presentation of information

**Classification of Media:**

| Type | Description | Examples |
|------|-------------|----------|
| **Perception Media** | Help humans sense environment (seeing & hearing) | Text, image, video, music, noise, speech |
| **Representation Media** | Internal computer representation of information | ASCII text, JPEG images, MPEG video, PAL/NTSC/SECAM |
| **Presentation Media** | Tools/devices for I/O of information | Output: paper, screen, speaker; Input: keyboard, mouse, camera, mic |
| **Storage Media** | Data carriers for storing information | Hard disk, CD-ROM, DVD, floppy, microfilm |
| **Transmission Media** | Information carriers for data transmission | Wired/wireless networks |
| **Information Exchange Media** | Combination of storage and transmission media | Electronic mailing system |

**Media Concepts:**
- **Representation values**: Continuous (electromagnetic waves) vs Discrete (text characters)
- **Representation space**: Visual (paper, screen) vs Acoustic (stereo)
- **Representation dimensions**: Spatial dimensions, Temporal dimensions

### Multimedia System and Properties

**Multimedia System:** A system characterized by computer-controlled, integrated production, manipulation, presentation, storage, and communication of independent information, encoded through at least one continuous (time-dependent) and one discrete (time-independent) medium.

**Properties:**
1. **Discrete and Continuous Media** - must utilize both
2. **Independent Media** - media types may be tightly or loosely coupled
3. **Communication Capability** - distribute beyond single computer boundary
4. **Integration** - high integration level if changing one element affects others

### Characteristics of a Multimedia System
1. Must be **computer controlled**
2. **Integrated**
3. Information must be **digitally represented**
4. Interface must be **interactive**

### Components of a Multimedia System

| Component | Examples |
|-----------|----------|
| **Capture Devices** | Video camera, video recorder, microphone, keyboard, mouse, graphics tablet, 3D input devices, tactile sensors, VR devices |
| **Digitizing Hardware** | Hard disks, CD-ROMs, DVD-ROMs |
| **Communication Networks** | Local networks, Intranets, Internet, multimedia/special high-speed networks |
| **Computer Systems** | Multimedia desktop machines, workstations, MPEG/Video/DSP hardware |
| **Display Devices** | CD-quality speakers, HDTV, SVGA, Hi-Res monitors, color printers |

### Challenges for Multimedia Systems
1. **Distributed Networks** - multimedia over networks adds timing, storage, delivery challenges
2. **Temporal relationship between data** - maintaining correct timing between media elements
3. **Simultaneous Rendering** - playing media continuously together
4. **Sequencing** - keeping frames in correct order/timeframe (e.g., video)
5. **Synchronization (Lip sync)** - aligning separate streams (audio + video)

**Synchronization Types:**
- **Intra-media**: within one medium (correct video frame rate, ordered audio samples)
- **Inter-media**: across different media (audio matched with video, speech with captions)

**Synchronization Solutions:**
- RTP - transfers audio/video with timing info
- NTP - synchronizes clocks across distributed systems
- Buffering - pre-buffering and jitter buffers
- QoS - prioritizes multimedia traffic

### Multimedia Building Blocks
- Text
- Audio
- Animation
- Video
- Graphics

### Scope of Multimedia Applications

| Domain | Applications |
|--------|-------------|
| **Business** | Sales/marketing presentations, trade show production, staff training, company kiosks |
| **Education** | Courseware/simulations, e-learning/distance learning, information searching |
| **Entertainment** | Games, movies, video-on-demand, online |
| **Home** | Television, satellite TV, SMS services (chats, voting, reality TV) |
| **Public Places** | Information kiosks, smart cards, security |
| **Other** | Digital video editing, electronic newspaper/magazines, WWW, online encyclopedias, home shopping, interactive TV, videoconferencing, video-on-demand, interactive movies, virtual reality |

> **[Image: Global Structure of Multimedia Diagram - Application/System/Device domains - see Chapter 1 - Introduction to Multimedia_images]**

> **[Image: Hypertext vs Hypermedia illustration - see Chapter 1 - Introduction to Multimedia_images]**

> **[Image: Synchronization timeline diagram showing audio/video alignment - see Chapter 1 - Characteristics and Challenges of Multimedia Systems_images]**

> **[Image: Storage Requirements table/chart - media type vs size - see Chapter 1 - Characteristics and Challenges of Multimedia Systems_images]**

> **[Image: Bandwidth requirements by media type chart - see Chapter 1 - Characteristics and Challenges of Multimedia Systems_images]**

---

## Unit 2: Sound/Audio System (5 Hrs)

### Overview of Sound System

**What is Sound?**
- Physical phenomenon caused by vibration of material
- Triggers pressure wave fluctuations in air

**Sound Terminology:**

| Term | Description |
|------|-------------|
| **Frequency** | Reciprocal of period; measured in Hertz (Hz) |
| **Infrasonic** | 0 to 20 Hz |
| **Audio Sonic** | 20 Hz to 20 kHz (human hearing range) |
| **Ultrasonic** | 20 kHz to 1 GHz |
| **Amplitude** | Perceived as loudness/volume |

### Producing Digital Audio

**Computer Representation of Sound:**
- A computer measures amplitude of waveform at regular intervals → **samples**
- Audio signals converted to digital via **ADC (Analog-to-Digital Converter)**

**Sampling Rate:** Rate at which continuous waveform is sampled (measured in Hz)

**Nyquist Sampling Theorem:** "For lossless digitization, the sampling rate should be at least twice the maximum frequency."
- CD standard: 44,100 Hz (represents frequencies up to 22,050 Hz)

**Quantization:** Resolution depends on number of bits used for sample value
- 8-bit quantization → 256 values
- 16-bit quantization → 65,536 values (CD quality)
- Lower quantization → more sound quality deterioration

**Sound Hardware:** Microphone jacks, built-in speakers, headsets

### Music and Speech

**MIDI (Musical Instrument Digital Interface)**
- Connectivity standard for musical instruments and computers
- Developed in early 1980s
- Two components:
  1. **Hardware** - physical connection, MIDI port, MIDI cable, electronic signals
  2. **Data format** - digital MIDI messages

**MIDI System Components:**

| Component | Description |
|-----------|-------------|
| **Synthesizers** | Converts MIDI note messages to audio signal |
| **Sequencers** | Storage server for generated MIDI data (hardware + software) |
| **Controllers** | Devices for manipulating MIDI software messages |
| **Network** | Interconnection of MIDI devices |

**MIDI Devices:**
- 16 channels, 128 instruments
- Examples: 0=Acoustic grand piano, 12=Marimba, 40=Violin, 73=Flute
- Components: Sound generators, Microprocessor, Keyboard, Control panel, Auxiliary controllers, Memory
- Other devices: Drum machine, Master keyboard, Sequencer

**MIDI Messages:**
- **Status byte** - first byte, describes message kind
- **Data byte** - following bytes

| Type | Subtype | Description |
|------|---------|-------------|
| **Channel Message** | Channel Voice | Performance data (note on/off, channel pressure, control change) |
| | Channel Mode | Determines device response (local control, all note off, omni mode off) |
| **System Message** | System Real Time | Synchronizes timing (system reset, timing clock/MIDI clock) |
| | System Common | Commands for sequencer/synthesizer (song select, tune request) |
| | System Exclusive | Transmits info about specific hardware functions |

**MIDI Software Categories:**
1. Music recording and performance applications
2. Musical notations and printing applications
3. Synthesizer patch editors and librarians
4. Music education applications

**MIDI vs Digital Audio:**

| Aspect | MIDI | Digital Audio |
|--------|------|---------------|
| Data type | Instructions/messages | Actual waveform samples |
| File size | Very small | Large |
| Editability | Easy (change notes, instruments) | Limited |
| Sound quality | Depends on synthesizer | Fixed at recording |
| Storage | Note events | PCM samples |

### Speech Generation
- **Pitch** - subjective lowest spectral component
- **Voiced speech** - periodic behavior (vocal cords vibrate)
- **Unvoiced speech** - vocal cords open (f, s)

**Speech Terminology:**
- **Fundamental frequency** - lowest periodic spectral component (voiced sound)
- **Phone** - smallest speech unit (m in "mat", b in "bat")
- **Allophones** - variants of a phone (aspirated p in "pit" vs unaspirated p in "spit")
- **Morph** - smallest speech unit carrying meaning
- **Voiced sounds** - m, v, l (vocal cords used)
- **Unvoiced sounds** - f, s (vocal cords open)
- **Vowels** - a, e, i, o, u (free passage of breath)
- **Consonants** - b, c, d, f, g, h, j (partial/complete obstruction)

**Speech Generation Methods:**
- **Prerecorded speech** - PCM samples, playback with compression
- **Sound Concatenation** - text → transcription (letter-to-phone rules + dictionary) → sound script → speech signal (time/frequency concatenation)

### Speech Analysis
- **Speaker identification/verification** - acoustic fingerprint
- **Speech recognition** - determine what was said (text generation)
- **Emotion analysis** - how something was said (angry/calm)

**Speech Recognition System:** Extract characteristics to reduce data

### Speech Transmission

**Signal Form Coding** (no speech-specific properties):
- PCM stereo CD-quality data rate calculation
- Telephone quality: 64 Kbit/s
- DPCM: 56 Kbit/s
- ADPCM: 32 Kbit/s

**Source Encoding** (uses signal characteristics):
- Suppression of silence
- Exploits audio signal characteristics

**Recognition-Synthesis Methods:**
- Speech analysis at sender, synthesis at receiver
- Reduction to ~50 bit/s
- Only formant characteristics transmitted

> **[Image: 3-bit Quantization waveform diagram showing "angular-shape" wave - see Chapter 2 - Sound Audio System_images]**

> **[Image: Speech Synthesis System components diagram - time-dependent sound concatenation - see Chapter 2 - Sound Audio System_images]**

> **[Image: Speech Recognition System components diagram - see Chapter 2 - Sound Audio System_images]**

> **[Image: Speech Transmission using Source Encoding diagram - see Chapter 2 - Sound Audio System_images]**

> **[Image: Recognition-Synthesis System for Speech Transmission diagram - see Chapter 2 - Sound Audio System_images]**

---

## Unit 3: Images and Graphics (5 Hrs)

### Uses of Images and Graphics
- Recorded images (photographic, analog video, digital)
- Computer vision (video, digital image)
- Computer graphics (digital image)
- Multimedia (all above formats)

### Digital Image Representation
- Image = 2D matrix of numeric values (intensity at each point)
- **Pixel** (picture element) - point at which image is sampled
- **Gray scale levels** - pixel values of intensity images
- 8-bit integers → grayscale range 0 to 255

**Key Concepts:**

| Concept | Formula/Description |
|---------|-------------------|
| **Intensity** | 2^n different intensities for n-bit representation |
| **Resolution** | Depends on pixel grid distance and imaging system |
| **File Size** | W × L × n bits (W=width, L=height, n=bits per pixel) |

### Image and Graphics Format

**1. Captured Image Format:**
- From image frame grabber (e.g., VideoPix card)
- Parameters: Spatial Resolution (pixel × pixel), Color encoding (bits per pixel)
- Example: SPARCstation VideoPix - 320×240, 1/8/24-bit

**2. Stored Image Format:**
- 2D array of values (bitmap = binary, pixmap = color)
- Color representation: RGB components, indices to color tables, spectral samples
- May be compressed before storage

**Image File Formats:**

| Format | Description |
|--------|-------------|
| **PostScript** | Programming language for printing graphics/text, device-independent |
| **GIF** | Graphics Interchange Format (CompuServe, 1987); supports 256 colors, GIF24 supports 16M+ colors |
| **TIFF** | Tagged Image File Format (Aldus + Microsoft, 1987); supports RLE, LZW, FAX, JPEG compression |
| **XBM/XPM** | X11 Bitmap/Pixmap for UNIX; monochrome/color; no compression |
| **PBMplus** | Portable Bitmap (binary), Graymap (gray), Pixmap (true-color), Anymap (format-independent) |
| **BMP** | Windows bitmap; RGB color model; no compression; header + data region |

**Graphics Storage Formats:**

| Format | Description |
|--------|-------------|
| **IGES** | Initial Graphics Exchange Standard - 2D/3D CAD data transfer |
| **DXF** | Autodesk CAD format (de facto standard) |
| **HPGL** | Hewlett Packard Graphics Language - 2D, for plotters |

**Graphics Format:**
- Specified through graphics primitives (lines, rectangles, polyhedron) and attributes (line style, width, color)

### Working with Image and Graphics

**Computer Image Processing:**
- **Computer Graphics** - pictorial synthesis from computer-based models
- **Image Processing** - analysis/reconstruction from pictures (converse process)
- Components: Image Synthesis (generation) + Image Analysis (recognition)

### Image Synthesis
Generation of images of real or imaginary objects.

**Applications:**
1. **User Interface** - point-and-click, menu-driven
2. **Office Automation & Electronic Publishing** - desktop publishing, hypermedia
3. **Simulation & Animation** - scientific visualization, entertainment, cartoons, movies

**Dynamics in Graphics:**
- **Motion Dynamics** - objects move relative to stationary observer or vice versa
- **Update Dynamics** - change of shape, color, or other properties

**Framework of Interactive Graphics:**
1. **Application Model** - converts primitives to graphics commands
2. **Graphics System** - intermediary between application and display hardware (output transformations + input transformations)
3. **Graphics Hardware** - input devices (mouse, tablet, touch panel) + output devices (raster displays)

### Dithering
- Process to produce shades of gray or tints of colors using fewer colors
- Uses eye's spatial integration capability
- Two techniques:
  1. **Clustered-dot ordered dithering (halftoning)** - for laser printers
  2. **Dispersed-dot ordered dithering** - for CRT displays

**Example:** 2×2 pixel surface with 2 colors → 5 gray levels

### Image Analysis
Extracting descriptions of objects from images.

**Sub-areas:**
- **Image Enhancement** - improving quality (noise elimination, contrast enhancement)
- **Pattern Detection & Recognition** - detecting/clarifying patterns
- **Scene Analysis & Computer Vision** - recognizing 3D models from 2D images

**Applications:** Criminology, Biometrics, Aerial surveillance, Medicine, Space probes, Machine vision

### Image Recognition (6 Steps)

| Step | Description |
|------|-------------|
| **1. Formatting** | Capture → digital representation (pixels) |
| **2. Conditioning** | Eliminate/suppress noise |
| **3. Labeling** | Edge detection, boundary determination |
| **4. Grouping** | Arrange pixels into meaningful shapes (line fitting, curves) |
| **5. Extracting** | Compute data/attributes (centroid, orientation, intensity) |
| **6. Matching** | Compare with predefined objects (template matching, neural process) |

### Image Transmission

| Method | Description |
|--------|-------------|
| **Raw Image Data** | Direct digital format; Size = Spatial_Resolution × Pixel_Quantization |
| **Compressed Image Data** | Compressed before transmission (JPEG, MPEG) |
| **Symbolic Image Data** | Primitives + attributes (computer graphics); size = structure size |

> **[Image: Dithering patterns - 2×2 dithering showing 5 intensity levels - see Chapter 3 - Image and Graphics_images]**

> **[Image: Interactive Graphics Framework diagram - Application Model, Graphics System, Hardware - see Chapter 3 - Image and Graphics_images]**

---

## Unit 4: Video and Animation (6 Hrs)

### Digital Video
- Motion represented by rapid succession of still pictures (frames)
- Discrete sequence perceived as continuous (persistence of vision)

### Video Signal Representation

Three aspects: **Visual representation**, **Transmission**, **Digitization**

**Visual Representation:**
- **Aspect ratio** = picture width / height (conventional TV: 4/3 = 1.33)
- **Vertical detail** - determined by viewing distance / picture height (D/H)
- **Horizontal detail** - determined by aspect ratio (4/3 × picture height)
- **Resolution** - vertical = elements in height; horizontal = elements in width
- **Depth perception** - from perspective, focal length, camera focus
- **Luminance & Chrominance** - brightness (Y) + color information (Cb, Cr)

**Temporal Aspects:**
- **Continuity of Motion** - frame rate > 15 fps needed; smooth at 30 fps
- **Flicker** - minimum 50 refresh cycles/sec to avoid; alleviated via display refresh buffer

**TV Standards:**

| Standard | Frame Rate | Scanning |
|----------|------------|----------|
| **NTSC** | 30 fps (29.97 Hz) | Used in US/Japan |
| **PAL** | 25 fps (25 Hz) | Used in Europe/Asia |

**Video Signal Transmission:**

| Encoding | Description |
|----------|-------------|
| **RGB** | Separate signals for Red, Green, Blue |
| **YUV** | Luminance (Y) + two chrominance (U, V) |
| **YIQ** | Similar to YUV, used in NTSC system |
| **Composite** | All info combined into one signal; NTSC bandwidth: 4.2 MHz |

**Digitization:**
- Changing continuous signal into discrete components
- **Sampling** - dividing picture at M×N array of points
- **Quantizing** - dividing signal into range of gray level values

### Computer Video Format

| Standard | Resolution | Colors | Storage per Frame |
|----------|-----------|--------|-------------------|
| **CGA** | 320×200 | 4 colors | Calculated from resolution × bits |
| **EGA** | 640×350 | 16 colors | |
| **VGA** | 640×480 | 256 colors | |
| **SVGA** | 1024×768 | 256 colors | |

### Computer-Based Animation

**Animation:** Process of making something look alive

**Two Categories:**
1. **Motion Dynamics** - changing position (e.g., bouncing ball)
2. **Update Dynamics** - changing shape/size/structure (e.g., flower blooming)

**Also includes:** Changes in lighting, camera position, orientation, focus

**Basic Process of Animation:**
1. **Input process** - digitize key frame drawings (scanning, data tablet, drawing program)
2. **Composition stage** - combine foreground/background to generate frames
3. **Inbetween process** - interpolation between key frames
4. **Changing colors** - using CLUT (Color Look-Up Table) and double buffering

### Animation Language

| Type | Description | Examples |
|------|-------------|----------|
| **Linear List Notations** | Events described by start/end frame + action | Scefo (SCEne Format) |
| **General-purpose Languages** | Animation embedded in programming language | ASAS |
| **Graphical Languages** | Visual description of animation | GENESYS, DIAL, S-Dynamics |

### Timeline and Frame-Based Animation

**Timeline-based Animation:**
- Visual representation of event sequence over time
- Layers represent elements
- Keyframes mark start/end of changes
- Smooth transitions between keyframes

**Frame-based Animation (Traditional):**
- Each frame created individually
- Series of slightly different images
- More time/effort, maximum control
- Used in hand-drawn animation and stop motion

**Example tools:** Adobe Animate, TVPaint, Blender, After Effects

### Timeline and Tween-Based Animation

**Tweening** = "in-betweening"
- Automatically generates intermediate frames between keyframes

**Types of Tweens:**
- **Motion Tween** - position, rotation, scale changes
- **Shape Tween** - morphing one shape into another
- **Classic Tween** - traditional + automated in-betweens

### Methods of Controlling Animation

| Method | Description |
|--------|-------------|
| **Full Explicit Control** | Animator specifies everything (scaling, translation, rotation, key frames + interpolation) |
| **Procedural Control** | Communication between objects determines properties (physics-based, actor-based) |
| **Constraint-based Systems** | Motion determined by constraints/contact with other objects |
| **Tracking Live Action** | Trajectories from real action (rotoscoping, data glove) |
| **Kinematics & Dynamics** | Position/velocity (kinematics) + physical laws (dynamics) |

### Display of Animation
- Animated objects scan-converted and stored as pixmap in frame buffer
- Minimum 10-15 fps for smooth effect
- **Double buffering** used to remove distracting scan-conversion effects
- Process: Alternate between image0 and image1 in frame buffer

### Transmission of Animation

| Method | Description | Pros/Cons |
|--------|-------------|-----------|
| **Symbolic Representation** | Transmit primitives + operation commands; receiver displays | Smaller size, longer display time |
| **Pixmap Representation** | Transmit complete pixmap; receiver just displays | Larger size, shorter display time |

> **[Image: YIQ encoding operations of NTSC system - see Unit 4_images]**

> **[Image: Architecture of a raster display - see Unit 4_images]**

> **[Image: Raster Display double buffering for animation - see Unit 4_images]**

---

## Unit 5: Data Compression

### Need for Data Compression
- Uncompressed graphics, audio, video require huge storage
- Even CD/DVD technology insufficient for raw video
- 90% of raw audio can be deleted without quality loss

**Important compression standards:** JPEG (images), H.263 (video), MPEG (video/audio), QuickTime, Video for Windows

### Compression Basics

**Storage Space Requirements:**
- Telephone quality audio (8 kHz, 8-bit): 64 kbits/sec
- CD quality stereo audio (44.1 kHz, 16-bit): 705.6 kbits/sec

### Coding Requirements

**Raw data sizes:**
- 1080p video (1 min): ~10-15 GB
- CD-quality audio (1 min): ~10 MB
- Raw 12MP image: ~36 MB

### Lossless and Lossy Compression Techniques

| Type | Description | Examples |
|------|-------------|----------|
| **Lossless** | Exact original data can be recovered | PNG, FLAC, ZIP |
| **Lossy** | Some data permanently removed, smaller files | MP3, JPEG, H.264 |

### Source, Entropy, and Hybrid Coding

**1. Source Coding (Lossy):**
- Considers semantics and data characteristics
- Transforms time domain → frequency domain
- Examples: DPCM, Delta Modulation, FFT, DFT, Sub-band coding

**2. Entropy Coding (Lossless):**
- Ignores semantics, views as digital data sequence
- Examples: Run-length encoding, Huffman coding, Arithmetic coding

**Run-Length Encoding:**
- For data with long substrings of same character
- Transmits character + count of repetitions
- Example: AAAAABBBTTTTTTMMMMMMMM → A!5BBBT!6M!8

**Huffman Coding:**
- Variable length coding
- Assigns fewer bits to more probable characters
- Builds binary tree from character probabilities
- Example: p(A)=0.16, p(B)=0.51, p(C)=0.09, p(D)=0.13, p(E)=0.11 → w(A)=001, w(B)=1, w(C)=011, w(D)=000, w(E)=010

**Arithmetic Coding:**
- Single codeword for entire string (unlike Huffman's per-character)
- Divides range [0,1) into segments based on character probabilities

**3. Hybrid Coding:**
- Combines source coding + entropy coding
- Examples: MPEG, JPEG, H.261, DVI

**Major Steps of Data Compression:**
1. **Preparation** - analog to digital conversion, divide into blocks (4×4 or 8×8 pixels)
2. **Processing** - time → frequency domain using DCT
3. **Quantization** - define discrete levels, reduce precision
4. **Entropy Encoding** - lossless compression (RLE or Huffman)

### JPEG Compression (Joint Photographic Experts Group)

**Requirements:**
- Independent of image size
- Applicable to any image/pixel aspect ratio
- Color representation independent of implementation
- Image content of any complexity
- Near state-of-art compression factor
- Software solution possible, hardware enhances quality

**Steps of JPEG Compression:**
1. **Block Preparation** - RGB → YIQ: Y=0.30R+0.59G+0.11B, I=0.60R-0.28G-0.32B, Q=0.21R-0.52G+0.31B
2. **DCT (Discrete Cosine Transformation)** - 8×8 matrix of DCT coefficients; (0,0) = average value
3. **Quantization** - divide coefficients by weights from table; higher frequencies dropped
4. **Differential Quantization** - replace DC component with difference from previous block
5. **Run-length Encoding** - zigzag scanning pattern, compress with RLE
6. **Statistical Encoding** - Huffman coding

### JPEG Modes

| Mode | Description |
|------|-------------|
| **Lossy Sequential DCT-based (Baseline)** | Must be supported by every decoder; image parts drawn sequentially |
| **Expanded Lossy DCT-based** | 12-bit + 8-bit samples; progressive encoding (rough → refined) |
| **Lossless Mode** | Low compression, perfect reconstruction; predictive technique (no DCT) |
| **Hierarchical Mode** | Accommodates multiple resolutions using other modes |

**Progressive Encoding** (Expanded Lossy): Two approaches:
- **Spectral Selection** - low frequencies first, then higher
- **Successive Approximation** - most-significant bits first, then less-significant

### MPEG Compression (Motion Picture Experts Group)

**Established:** 1988 by ISO/IEC

**MPEG Standards:**
- **MPEG-1** - storage/retrieval of moving pictures + audio on storage media
- **MPEG-2** - digital television
- **MPEG-4** - multimedia applications
- **MPEG-7** - content representation for information search
- **MPEG-21** - metadata for audio/video files

**MPEG Video Compression:**
- Uses **Motion-Compensated DCT** algorithms
- Max data rate: 1,856,000 bits/sec
- Audio: 32-448 Kbits/sec
- Exploits JPEG and H.261 standards

**Algorithms used:**
1. **Temporal Prediction** - exploits redundancy between video pictures
2. **Frequency Domain Decomposition** - DCT to exploit spatial redundancy
3. **Quantization** - reduces bit rate, minimizes perceptual loss
4. **Variable-length Coding** - exploits statistical redundancy

**MPEG Video Encoding:**
- 14 different image aspect ratios (square 1:1, 4:3, 16:9 for HDTV)
- 8 refresh frequencies defined (23.976 Hz to 60 Hz)
- Images divided into **macroblocks** (16×16 luminance, 8×8 chrominance)
- Motion estimation for compression

> **[Image: Major steps of Data Compression diagram - see Chapter 5 (1)_extracted.txt slide 15]**

> **[Image: Huffman Coding binary tree - see Chapter 5 (1)_extracted.txt slide 12]**

> **[Image: Sequential DCT-based coding mode diagram - see Chapter 5 (1)_extracted.txt]** 

> **[Image: Progressive Picture Presentation diagram - see Chapter 5 (1)_extracted.txt]**

> **[Image: Predictors in lossless mode diagram - see Chapter 5 (1)_extracted.txt]**

---

## Unit 6: Abstractions for Programming

### Abstraction Levels

```
Application Level
       ↑
Object-Oriented Languages
       ↑
Higher Procedural Languages
       ↑
System Software
       ↑
Toolkits
       ↑
Libraries
       ↑
Device Drivers
       ↑
Device Level
```

| Level | Description |
|-------|-------------|
| **Device** | Component for processing continuous media |
| **Library** | Simplest abstraction; functions for hardware control |
| **Device Drivers** | Bounding multimedia devices |
| **System Software** | Processing continuous data (schedulers: monotonic, earliest-deadline-first) |
| **Higher Procedural Language** | Language with abstractions of multimedia data |
| **Object-Oriented Language** | Class hierarchy for multimedia manipulation |

### Libraries
- Set of functions for continuous media processing
- Provided with corresponding hardware
- Some are extensions of GUI; others are control blocks for drivers
- Useful at OS level
- **OpenGL**: 2D/3D graphics API (Silicon Graphics); cross-platform (PCs, Workstations, Supercomputers); stable, reliable, portable, scalable

### System Software
- Device access becomes part of OS (e.g., Nemo system)
- **Data as time capsules** - each LDU carries data type, value, valid lifespan
  - Video frame lifespan: 40ms
  - VCR functions change presentation lifespan (fast forward, slow forward, rewind)
- **Data as streams** - continuous flow between source and sink

**DirectX:**
- Low-level APIs for high-performance applications (especially games)
- Direct access to hardware services (audio, video cards, accelerators)
- **Components:**
  - DirectDraw - 2D graphics
  - Direct3D - 3D graphics
  - DirectSound - 3D sound, mixing, playback
  - DirectPlay - network multiplayer games
  - DirectInput - peripherals (joysticks, data gloves)
- **Implementation:** HAL (Hardware Abstraction Layer), HEL (Hardware Emulation Layer), Media Layer

### Toolkits
- Control audio/video data processing in programming environment
- Hide process structures
- Abstract from physical layer
- Uniform interface for continuous media devices
- Client-server paradigm

### Higher Programming Languages
- Processing continuous media data via grouped functions
- Hardware and driver independent
- **Media as types** - e.g., OCCAM-2 (transputer programming)
- **Media as files** - treat streams as file handles
- **Media as processes** - map continuous media to processes

**Programming Language Requirements:**
- Support parallel processing
- Asynchronous instructions
- Inter-process communication mechanism
  - Understand QoS time requirements
  - Transmit continuous data on time
  - Initiate processing on time

**Example Languages:** OCCAM-2, ADA, parallel C (for transputer)

### Object-Oriented Approaches
- Reduce complexity via data encapsulation, inheritance, class/object definitions

**Key OOP Concepts:**
- **Abstract Type Definition** - interface without internal algorithm knowledge
- **Class** - user-defined data type (blueprint for objects)
- **Object** - instance of class; communicates via messages
- **Inheritance** - simple or multiple (superclass/subclass hierarchy)
- **Polymorphism** - same method name, different implementations in different classes

**Multimedia OO Classes:**
- **Devices as classes** - objects representing device behavior/interfaces
- **Processing units as classes** - Source, Destination, Combined Source-Destination objects
- **BMCs (Basic Multimedia Classes) / BMOs (Basic Multimedia Objects)**
- **CMCs (Compound Multimedia Classes) / CMOs (Compound Multimedia Objects)**
- **Media as classes** - Class hierarchies:
  ```
  Medium
    Acoustic_Medium
      Music (Opus → Score → Audio_Block → Sample_Value)
      Speech
    Optical_Medium
      Video (Video_Scene → Image → Image_Segment → Pixel)
      Animation
      Text
  ```
- **Application-specific metaphors** - Banking (Account, Customer, Transaction), Library (Book, Member, Loan)
- **Application-generic metaphors** - Data Structures (List, Stack, Queue), Algorithms (Sorter, Searcher)
- **Communication-specific metaphors** - Networking (Socket, Packet, Protocol), Messaging (Email, Chat)

> **[Image: Abstraction levels diagram/pyramid - see Chapter 6_images]**

---

## Unit 7: Multimedia Design

### Development Phases and Development Teams

**Phases:**
1. **Analysis Phase** - Define goals, audience, requirements
2. **Design Phase** - Storyboards, flowcharts, wireframes, technical design
3. **Development Phase** - Build graphics, audio, video, animations; programming
4. **Implementation Phase** - Integrate all components; optimize
5. **Evaluation and Testing Phase** - QA, user testing, performance testing, validation
6. **Maintenance Phase** - Updates and fixes after deployment

**Development Team:**
- **Project Manager** - oversees project, budget, timeline
- **Multimedia Designers** - visual elements, animations, layouts
- **Content Writers** - scripts, text, narrative
- **Programmers/Developers** - code, interactive features
- **Audio/Video Specialists** - produce/edit audio/video
- **QA Testers** - functionality and usability testing
- **Subject Matter Experts (SMEs)** - domain expertise

### Analysis Phase
- Identifying Goals
- Audience Analysis
- Requirement Gathering from stakeholders
- Feasibility Study (technical, financial, operational)
- Scope Definition

### Design Phase
- Storyboarding (visual representation of screens/scenes)
- Flowcharting (navigation and flow)
- Wireframing (layout and interface elements)
- Technical Design (databases, software architecture)

### Development Phase
- Content Creation (graphics, animations, audio, video, text)
- Programming
- Prototype Development

### Implementation Phase
- Integration of all components
- Optimization
- Preliminary Testing

### Evaluation and Testing Phase
- **Quality Assurance Testing** - systematic bug/error detection
- **User Testing** - feedback from real users
- **Performance Testing** - under different conditions
- **Validation** - meeting specified requirements

### Multimedia User Interface Design

**User Interface:** Layer of software with which end users interact (GUI with keyboard, mouse, trackball, data gloves)

**Multimedia UI:** Computer interface where users interact via multiple media and modes (e.g., MS Word - keyboard + microphone)

**Principles of UI Design:**

| Principle | Description |
|-----------|-------------|
| **1. Consistency** | Same words/commands perform same functions throughout |
| **2. Clarity** | Clear labels/icons; easy to understand |
| **3. Context** | Every part relevant to title |
| **4. Navigation** | Easy to move around; clear exit/proceed |
| **5. Search** | Keyword/glossary search; preview, grouping, sorting |
| **6. Personalization** | Users customize display/learning options |
| **7. Learnability** | Help files, support information |
| **8. Flexibility** | Users navigate all sections without limitations |

**General Design Issues:**
1. Determine appropriate information content
2. Represent essential characteristics of information
3. Represent communicative intent
4. Choose proper media for presentation
5. Provide interactive exploration

**Architectural Issues:**
- Presentation should be as interactive as informative
- User freedom for navigation direction
- Context-sensitive help
- Proper media selection

**Information Characteristics for Presentation:**
1. **Types** - coordinate vs amount, interval vs ratio
2. **Relational Structures** - domain mapping (dependency)
3. **Large Data Sets** - numerous attributes of heterogeneous objects
4. **Multi-domain Relations** - multiple attributes, object sets, displays

**Presentation Design Knowledge:**
- **Content Selection** - choose what to present (simple, revealing)
- **Media Selection** - governed by information characteristics (graphs for numbers, audio for narration)
- **Coordination** - encoding techniques, presentation objects, multiple displays

**Effective HCI Considerations:**
- Context
- Linkage to world beyond display
- Evaluation against other interfaces
- Interactive capabilities
- Separability of UI from backend

---

## Unit 8: Multimedia Applications

### Media Preparation and Composition

**Media Preparation:** Performed by multimedia I/O hardware and supporting software

**Audio Support:**
- Multiple channel digital sound tracks (6-channel: front-left, center, front-right, surround-left, surround-right, sub-woofer)
- Virtual reality: sound via helmet

**Video Support:**
- High-resolution picture presentation (goal: 60 fps)
- Displays: Head Mounted Displays (HMD), Surround displays, Digital Holography

**Scanner Devices:** Photo scanner, Image scanner, Photo CD

**Recognition Devices:** OCR (e.g., AQUIRE), Image recognition, Speech recognition

**Tracking Devices:** Electromagnetic trackers, Ultrasound, Optical tracking, Eye tracking

**Motion-based Devices:** Passive infrared, Microwave, Dual technology, Ultrasonic, Vibration, Contact, Video motion sensor

### Media Integration and Communication

**Media Composition:** Editing single media (changing objects, attributes)
- **Text editors** - font, styles, effects
- **Graphics editors** - graphical objects
- **Image editors** - scaling, resolution, intensity
- **Animation editors** - 2D/3D animation
- **Sound editors** - recording, playback, editing
- **Video editors** - motion video editing

**Media Integration:** Specifies relationships between media elements
- Platform-specific and format-specific
- **Multimedia editors** - manipulate documents with text, bitmap, graphics, video, voice
  - Design issues: Document structure, Media editor integration, Buffers/panes, Large documents, External representation (standardized format)

**Hypermedia/Hypertext editors:** Multimedia + non-linear links (Hypercard, DynaText, NoteCard, Guide)

**Authoring tools:** Concept → Design → Content Collection → Assembly → Testing (Mediascript, IconAuthor, ToolBook, Authorware, PowerPoint, MovieWorks)

**Media Communication (Tele-services):**
- Exchange of media over networks
- **Advantage:** Users in different locations can work naturally on remote data
- **Disadvantage:** Delivery time longer than local processing

**Tele-services Categories:**

| Type | Sub-type | Examples |
|------|----------|----------|
| **Interactive Services** | Conversational | Video conference |
| | Messaging | Mailing |
| | Retrieval | Document retrieval |
| | Tele-operation | Tele-robotics |
| | Tele-action | Act at distance |
| | Transaction processing | Credit card, ATM |
| | Alarm/surveillance | Fire, smoke, environment |
| | Business automation | Real estate listing |
| | Utility management | Automatic meter reading |
| | Control/command | Tele-metric services |
| | Interactive video | Home shopping |
| **Distribution Services** | Without user control | TV/radio broadcasting |
| | With user control | Video-on-demand, Pay-per-view |

**Media Consumption:**
- **Viewing** - Browsing (overview) vs Detailed consumption (reading/viewing/listening)
- **Kiosks** - public information services (airports, train stations, cinemas)

### Media Entertainment
- Virtual reality, location-based entertainment, motion-based simulators, games

**Virtual Reality (VR):**
- 3D interactive (not passive)
- Uses head-mounted displays or CRTs
- Provides sense of presence

**Interactive Video:** Interactive TV, Video-on-demand (VOD), Interactive audio (CD-on-demand, thematic audio), Games (tele-games)

### Telemedicine
(Refer to assignment content - applications of multimedia in telemedicine)

### E-learning
(Refer to assignment content - applications of multimedia in e-learning)

### Digital Video Editing and Production Systems
(Refer to assignment content)

### Video Conferencing
(Refer to assignment content)

### Video-on-Demand
(Refer to assignment content - VOD allows users to select and watch video content on demand)

> **[Image: Media composition/editing workflow - see Chapter 8_images]**
