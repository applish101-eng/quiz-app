# Multimedia Systems — Self Study Notes (BCA 8th Semester)
---

## UNIT 1: Introduction to Multimedia (6 Hrs)

### 1.1 Definition
**Multimedia** = combination of text, graphic, sound, animation, and video delivered interactively to the user by electronic or digital means.

### 1.2 Applications of Multimedia (12 Points)
| # | Application | Description | Example |
|---|-------------|-------------|---------|
| 1 | Education | Interactive and effective learning | Smart classes with videos and animations |
| 2 | Entertainment | Movies, music, video games | Animated movies and 3D games |
| 3 | Business | Presentations, training, communication | PowerPoint with audio and video |
| 4 | Advertising | Product promotion through visuals | Social media ads, TV commercials |
| 5 | Healthcare | Medical training and patient education | 3D surgical simulations |
| 6 | Communication | Real-time interaction | Video conferencing apps |
| 7 | Web Design | Interactive websites | Websites with animations and videos |
| 8 | Journalism | Engaging news delivery | Online news with videos and graphics |
| 9 | Virtual Reality | Immersive environments | VR simulations for pilot training |
| 10 | Public Information | Easy information access | Information kiosks at airports |
| 11 | Gaming | Interactive gaming experiences | Mobile and console video games |
| 12 | E-Commerce | Product showcase | Product videos on shopping sites |

---

## UNIT 4: Video and Animation (6 Hrs)

### 4.1 Digital Video
Moving visual images in digital form. Sequence of **frames** creates illusion of motion.

### 4.2 Video Signal Representation
- **Aspect ratio** = width/height (TV: 4/3)
- **Luminance and Chrominance** - brightness (Y) + color (Cb, Cr)
- **Motion:** > 15 fps needed; smooth at 30 fps

**TV Standards:**
| Standard | Frame Rate | Used In |
|----------|------------|---------|
| **NTSC** | 30 fps (29.97 Hz) | US/Japan |
| **PAL** | 25 fps (25 Hz) | Europe/Asia |

### 4.3 Video Signal Encoding
| Encoding | Description |
|----------|-------------|
| **RGB** | Separate R, G, B signals |
| **YUV** | Luminance (Y) + chrominance (U, V) |
| **YIQ** | Used in NTSC |
| **Composite** | All info in one signal |

### 4.4 Computer Video Standards
| Standard | Resolution | Colors |
|----------|-----------|--------|
| CGA | 320x200 | 4 |
| EGA | 640x350 | 16 |
| VGA | 640x480 | 256 |
| SVGA | 1024x768 | 256 |

### 4.5 Difference Between Video and Animation
| Basis | Video | Animation |
|-------|-------|-----------|
| Source | Captured using camera | Created using software |
| Nature | Real and natural | Artificial and designed |
| Flexibility | Limited editing | Highly editable |
| Example | Movie recording | Cartoon |

### 4.6 Computer-Based Animation
**Categories:** Motion Dynamics (position change), Update Dynamics (shape/size change)

**Basic Process:**
1. Input process - digitize key frame drawings
2. Composition - combine foreground/background
3. Inbetween - interpolation between key frames
4. Color changes - CLUT + double buffering

### 4.7 Animation Languages
| Type | Description | Example |
|------|-------------|---------|
| Linear List Notations | Events by start/end frame + action | Scefo |
| General-purpose Languages | Animation in programming language | ASAS |
| Graphical Languages | Visual description of animation | GENESYS, DIAL |

### 4.8 Tweening
Automatically generates intermediate frames between keyframes.
**Types:** Motion Tween (position/rotation/scale), Shape Tween (morphing), Classic Tween

### 4.9 Methods of Controlling Animation
**Full Explicit Control, Procedural Control, Constraint-based Systems, Tracking Live Action, Kinematics and Dynamics**

### 4.10 Display and Transmission
- **Display:** Minimum 10-15 fps; double buffering
- **Transmission:** Symbolic (smaller, longer display) vs Pixmap (larger, shorter display)

---

## UNIT 5: Data Compression

### 5.1 Storage Requirements
- Telephone audio (8 kHz, 8-bit): 64 kbits/s
- CD audio (44.1 kHz, 16-bit stereo): 1,411.2 kbits/s
- 1080p video (1 min): ~10-15 GB

### 5.2 Lossless vs Lossy Compression
| Type | Description | Examples |
|------|-------------|----------|
| **Lossless** | Exact original recovered | PNG, FLAC, ZIP |
| **Lossy** | Some data removed | MP3, JPEG, H.264 |

### 5.3 Coding Types

**1. Source Coding (Lossy):** DPCM, Delta Modulation, FFT, DFT

**2. Entropy Coding (Lossless):**
- **Run-Length Encoding (RLE):** Repeated chars -> char + count
  - AAAAABBBTTTTTTMMMMMMMM -> A5BBBT6M8
- **Huffman Coding:** Variable-length codes; frequent = short, rare = long
- **Arithmetic Coding:** Single codeword for entire string

**3. Hybrid Coding:** Source + Entropy combined (MPEG, JPEG, H.261)

### 5.4 Steps of Data Compression
1. **Preparation** - analog to digital, divide into blocks
2. **Processing** - time -> frequency via DCT
3. **Quantization** - reduce precision
4. **Entropy Encoding** - RLE or Huffman

### 5.5 JPEG Compression
**Steps:**
1. Image Input (RGB) -> 2. Color Change (RGB -> YCbCr) -> 3. Block Split (8x8 blocks) -> 4. DCT (frequency domain) -> 5. Quantization (reduce precision) -> 6. Zig-Zag Order -> 7. Huffman Coding

**JPEG Modes:**
| Mode | Description |
|------|-------------|
| **Baseline (Lossy Sequential DCT)** | Most common; all decoders support it |
| **Expanded Lossy DCT** | Higher precision; progressive encoding |
| **Lossless Mode** | No DCT; prediction-based; perfect reconstruction |
| **Hierarchical Mode** | Multiple resolutions |

### 5.6 MPEG Compression
**Definition:** Lossy video compression using Motion-Compensated DCT. Removes spatial + temporal redundancy.

**MPEG Standards:**
| Standard | Purpose |
|----------|---------|
| MPEG-1 | Storage/retrieval on storage media |
| MPEG-2 | Digital television |
| MPEG-4 | Multimedia applications |
| MPEG-7 | Content representation for search |
| MPEG-21 | Metadata for audio/video |

**Key Techniques:** Motion estimation, DCT, Quantization, Variable-length coding

**Frame Types:** I-frame (full image), P-frame (prediction), B-frame (both directions)

### 5.7 JPEG vs MPEG Compression
| Feature | JPEG | MPEG |
|---------|------|------|
| Data Type | Still images | Video (moving images + audio) |
| Redundancy Removed | Spatial only | Spatial + Temporal |
| Key Technique | DCT, Quantization, Huffman | Motion estimation + DCT |
| Frame Concept | Not used | I-frame, P-frame, B-frame |
| Output | Compressed image file | Compressed video file |
| Example Use | Photos, web graphics | YouTube, Netflix, TV |

---

## UNIT 6: Abstractions for Programming

### 6.1 Abstraction Levels
**Order:** Device -> Device Driver -> Library -> System Software -> Framework (Toolkit) -> OOP Language -> Higher Programming Language

| Level | Description |
|-------|-------------|
| **Device** | Physical hardware for continuous media |
| **Device Driver** | Software connecting multimedia devices to OS |
| **Library** | Pre-written functions (e.g., OpenGL) |
| **System Software** | OS manages multimedia processing, scheduling |
| **Framework (Toolkit)** | Common interfaces for audio/video processing |
| **OOP Language** | Classes, objects for multimedia manipulation |
| **Higher Programming Language** | Hardware-independent functions |

### 6.2 Libraries
Collection of pre-written functions for continuous media processing.
**Example: OpenGL** - cross-platform 2D/3D graphics API (Silicon Graphics).

### 6.3 System Software
- **Data as time capsules** - LDU carries data type, value, lifespan (video frame: 40ms)
- **Data as streams** - continuous flow between source and sink
- **DirectX:** Low-level APIs (DirectDraw, Direct3D, DirectSound, DirectPlay, DirectInput)

### 6.4 Toolkits
Control audio/video processing; abstract from physical layer. Client-server paradigm.

### 6.5 Higher Programming Languages
**Media Representations:**
- **Media as Types** - multimedia = variable (e.g., AUDIO_LDU)
- **Media as Files** - multimedia = file (open, read, process, close)
- **Media as Processes** - multimedia = running program (play, pause, stop)

**Requirements:** Support parallel processing, asynchronous operations, IPC with QoS

**Examples:** OCCAM-2, ADA, Parallel C

### 6.6 Object-Oriented Approaches
- **Devices as classes** - objects representing device behavior
- **Processing units as classes** - Source, Destination, Combined Source-Destination
- **BMCs/BMOs** - Basic Multimedia Classes/Objects
- **Media as classes:**
  - Acoustic_Medium: Music (Opus -> Score -> Audio_Block -> Sample_Value), Speech
  - Optical_Medium: Video (Scene -> Image -> Segment -> Pixel), Animation, Text

---

## UNIT 7: Multimedia Design

### 7.1 Development Phases
| Phase | Activities |
|-------|------------|
| **1. Analysis** | Define goals, audience, requirements, feasibility, scope |
| **2. Design** | Storyboards, flowcharts, wireframes, technical design |
| **3. Development** | Content creation, graphics, audio, video, programming |
| **4. Implementation** | Integration, optimization, preliminary testing |
| **5. Evaluation and Testing** | QA testing, user testing, performance testing, validation |
| **6. Maintenance** | Updates and fixes after deployment |

### 7.2 Development Team
| Role | Responsibility |
|------|---------------|
| Project Manager | Manages project, budget, schedule |
| Multimedia Designers | Graphics, layouts, animations |
| Content Writers | Scripts, text, narrative |
| Programmers/Developers | Coding and interaction |
| Audio/Video Specialists | Create/edit audio/video |
| QA Testers | Test functionality and usability |
| SMEs | Domain knowledge |

### 7.3 MDLC (Multimedia Development Life Cycle)
**Phase 1 - Planning:** Concept, Purpose, Target audience, Treatment, Specifications, Storyboard
**Phase 2 - Creating:** Content development, Authoring
**Phase 3 - Testing:** Testing the title

### 7.4 Analysis Phase Activities
- Identifying Goals, Audience Analysis, Requirement Gathering, Feasibility Study, Scope Definition

### 7.5 Design Phase Activities
- Storyboarding, Flowcharting, Wireframing, Technical Design

### 7.6 Development Phase Activities
- Content Creation, Graphics/Audio/Video/Animation Development, Programming, Prototype

### 7.7 Implementation Phase Activities
- Integration, Optimization, Preliminary Testing

### 7.8 Evaluation and Testing Phase
- **Quality Assurance Testing** - Find bugs and errors
- **User Testing** - Collect user feedback
- **Performance Testing** - Under different conditions
- **Validation** - Verify requirements are met
- **Formative Evaluation** - Improves instruction
- **Summative Evaluation** - Measures effectiveness

### 7.9 Multimedia User Interface Design
**UI Principles:** Consistency, Clarity, Context, Navigation, Search, Personalization, Learnability, Flexibility

**General Design Issues:**
1. Determine appropriate information content
2. Represent essential characteristics of information
3. Represent communicative intent
4. Choose proper media for presentation
5. Provide interactive exploration

**Presentation Design Knowledge:**
- **Content Selection** - what to present
- **Media Selection** - graphs for numbers, audio for narration
- **Coordination** - encoding techniques, multiple displays

---

## UNIT 8: Multimedia Applications

### 8.1 Media Preparation
Converting real-world media into digital form using multimedia I/O hardware + software.

**Audio Support:** Multi-channel digital sound (6-channel surround: front-left, front-right, center, surround-left, surround-right, subwoofer)

**Video Support:** High-resolution display at 60 fps. Devices: HMD, Surround displays, Digital Holography

### 8.2 Input/Recognition Devices
| Device Type | Examples |
|-------------|----------|
| Scanner Devices | Photo scanner, Image scanner, Photo CD |
| Recognition Devices | OCR, Image recognition, Speech recognition |
| Tracking Devices | Electromagnetic, Ultrasound, Optical, Eye tracking |
| Motion-based Devices | Passive infrared, Microwave, Ultrasonic, Vibration, Video motion sensor |

### 8.3 Media Composition (Editors)
| Editor | Purpose |
|--------|---------|
| Text editors | Font, styles, effects |
| Graphics editors | Graphical objects |
| Image editors | Scaling, resolution, intensity |
| Animation editors | 2D/3D animation |
| Sound editors | Recording, playback, editing |
| Video editors | Motion video editing |

### 8.4 Media Integration and Communication
**Multimedia Editors:** Handle text + images + audio + video together
**Hypermedia/Hypertext Editors:** Non-linear linking (HyperCard, DynaText, NoteCard, Guide)

**Authoring Tools Stages:** Concept -> Design -> Content Collection -> Assembly -> Testing
**Examples:** PowerPoint, Authorware, IconAuthor, ToolBook, MediaScript, MovieWorks

### 8.5 Tele-services
**Interactive Services (two-way):** Video conferencing, Email, Document retrieval, Tele-robotics, ATM transactions, Surveillance, Interactive TV

**Distribution Services (one-way):** TV broadcasting, Radio broadcasting, Video-on-demand, Pay-per-view

### 8.6 Media Consumption
- **Browsing** - quick overview / skimming
- **Detailed Consumption** - full reading/viewing/listening
- **Kiosks** - public information systems (airports, train stations, cinemas)

### 8.7 Media Entertainment
- **Virtual Reality (VR):** 3D interactive; HMD; sense of presence
- **Interactive Video:** Interactive TV, VOD, Interactive audio, Tele-games

### 8.8 Other Applications
- **Telemedicine** - remote diagnosis, surgery, consultation
- **E-learning** - online courses, virtual classrooms
- **Digital Video Editing** - non-linear editing systems
- **Video Conferencing** - real-time audio/video communication
- **Video-on-Demand (VOD)** - users select and watch content on demand

---

## Quick Memory Tricks

### Abstraction Levels Order
**D**evice -> **D**river -> **L**ibrary -> **S**ystem SW -> **F**ramework -> **O**OP -> **H**LL

### 6 Media Types
**P**erception, **R**epresentation, **P**resentation, **S**torage, **T**ransmission, **I**nformation Exchange

### Characteristics of MM System
**I**ntegration, **I**nteractivity, **D**igital, **C**omputer-controlled, **S**ynchronization

### JPEG Modes
**B**aseline, **E**xpanded, **L**ossless, **H**ierarchical

### MPEG Standards
**1** -> Storage, **2** -> Digital TV, **4** -> Multimedia, **7** -> Search, **21** -> Metadata

### Development Phases
**A**nalysis -> **D**esign -> **D**evelopment -> **I**mplementation -> **E**valuation -> **M**aintenance

### UI Design Principles
**C**onsistency, **C**larity, **C**ontext, **N**avigation, **S**earch, **P**ersonalization, **L**earnability, **F**lexibility

---
