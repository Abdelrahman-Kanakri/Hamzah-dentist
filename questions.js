// Question bank. Each question: [tier, question, [talking points]]
// Tiers: g = General, s = Specialized, h = Hard.
// Talking points are study prompts; verify numbers against current guidelines before teaching from them.
window.TOPICS = [
  {
    key: 'endo', name: 'Endodontics', hue: 172,
    q: [
      ['g', 'What is pulpitis, and how does reversible differ from irreversible?', [
        'Reversible: brief pain to a stimulus (usually cold) that stops when the stimulus is removed',
        'Irreversible: lingering or spontaneous pain, often worse lying down, may refer',
        'Reversible: remove the cause (caries, leaking restoration) and the pulp recovers',
        'Irreversible: pulp must be removed (root canal) or the tooth extracted']],
      ['g', 'Walk through the steps of a root canal treatment.', [
        'Diagnosis, anesthesia, rubber dam isolation',
        'Access cavity, locate canals, determine working length',
        'Clean and shape with files, irrigate (sodium hypochlorite)',
        'Obturate (gutta-percha + sealer), then a good coronal seal']],
      ['s', 'Why is sodium hypochlorite the main irrigant, and what are its risks?', [
        'Dissolves organic tissue and is strongly antimicrobial (about 0.5–6%)',
        'Hypochlorite accident: extrusion past the apex gives severe pain, swelling, bruising',
        'Prevent with side-vented needle, no binding, gentle pressure, correct length',
        'Also: tissue irritation, allergy, bleaches clothing']],
      ['s', 'How do you determine working length?', [
        'Electronic apex locator (impedance), confirmed with a radiograph',
        'Tactile feel and paper-point moisture as supporting checks',
        'Typically 0.5–1 mm short of the radiographic apex',
        'Why accuracy matters: overinstrumentation vs. leaving infected tissue']],
      ['s', 'Differentiate a periapical abscess, granuloma, and radicular cyst.', [
        'Abscess: acute, pus-forming; granuloma: chronic granulation tissue',
        'Radicular cyst: epithelium-lined, from rests of Malassez',
        'They can look alike on radiographs; histology is the definitive diagnosis',
        'Most respond to good root canal treatment; large cysts may need surgery']],
      ['h', 'Describe the canal anatomy of the maxillary first molar and why the MB2 matters.', [
        'Three roots; usually MB1, MB2, DB and palatal canals',
        'MB2 sits palatal/mesial to MB1, often found by troughing with a microscope',
        'Reported incidence is high (well over half, higher in lab/CBCT studies)',
        'A missed MB2 is a classic cause of persistent infection']],
      ['h', 'A root-treated tooth has persistent apical periodontitis. How do you choose between retreatment and apical surgery?', [
        'Assess the old filling quality, coronal seal, post, restorability, lesion size',
        'Orthograde retreatment first when the filling or seal is deficient',
        'Surgery when retreatment is impractical or failed: resect about 3 mm, retro-prep, bioceramic fill',
        'Consider patient factors, anatomy, instruments, and prognosis for restoring the tooth']],
    ],
  },
  {
    key: 'perio', name: 'Periodontics', hue: 196,
    q: [
      ['g', 'What is the difference between gingivitis and periodontitis?', [
        'Gingivitis: inflammation without attachment loss, fully reversible',
        'Periodontitis: attachment and bone loss, pockets, mobility',
        'Lost attachment and bone do not come back on their own',
        'Both are driven by plaque biofilm plus host response']],
      ['g', 'How does dental plaque lead to gum disease?', [
        'Biofilm shifts to a dysbiotic community (the “red complex” species)',
        'The host inflammatory response does most of the tissue damage',
        'Calculus retains plaque; risk modifiers: smoking, diabetes, genetics',
        'Control: mechanical plaque removal and professional care']],
      ['s', 'Explain the 2017 periodontitis classification (stage and grade).', [
        'Stage I–IV: severity and complexity (attachment loss, bone loss, tooth loss)',
        'Grade A–C: rate of progression and risk (smoking, diabetes)',
        'Replaced the “chronic vs. aggressive” split',
        'Stage describes extent today; grade predicts the future']],
      ['s', 'Describe scaling and root planing and when surgery is considered.', [
        'Non-surgical removal of plaque and calculus from root surfaces',
        'Re-evaluate after several weeks',
        'Residual deep pockets with bleeding indicate surgical options',
        'Surgery: access flap, regenerative, or resective procedures']],
      ['s', 'How is periodontal disease linked to systemic conditions?', [
        'Diabetes: a two-way relationship (control affects perio and vice versa)',
        'Cardiovascular disease and pregnancy outcomes: associations, causation not proven',
        'Proposed mechanism: systemic inflammatory burden and bacteremia',
        'Be careful to separate association from causation']],
      ['h', 'Compare guided tissue regeneration and enamel matrix derivative for intrabony defects.', [
        'Both give similar clinical attachment gain in good defects',
        'GTR: barrier membrane excludes epithelium; risk of membrane exposure',
        'EMD: mimics Hertwig’s sheath proteins to encourage cementum formation',
        'Defect shape matters (3-wall is best); often combined with bone graft']],
      ['h', 'Classify furcation involvement and outline treatment options.', [
        'Hamp: I (≤3 mm horizontal), II (>3 mm, not through), III (through-and-through)',
        'Glickman grades I–IV is the older alternative',
        'Options: scaling/furcation plasty, GTR, tunneling, root resection or hemisection',
        'Extraction and implant when the prognosis is poor']],
    ],
  },
  {
    key: 'ortho', name: 'Orthodontics', hue: 214,
    q: [
      ['g', 'How does orthodontic tooth movement work biologically?', [
        'Force creates pressure and tension sides in the periodontal ligament',
        'Osteoclasts resorb bone on the pressure side, osteoblasts form it on the tension side',
        'Light, continuous forces work best',
        'Signaling through RANKL/OPG; roughly a millimeter a month']],
      ['g', 'Explain Angle’s classification of malocclusion.', [
        'Class I: normal molar relationship, crowding or spacing elsewhere',
        'Class II: lower molar distal to normal (Div 1 proclined, Div 2 retroclined incisors)',
        'Class III: lower molar mesial to normal',
        'It describes dental relationship, not the underlying skeletal pattern']],
      ['s', 'When would you choose early (interceptive) orthodontic treatment?', [
        'Crossbite with a functional shift, ectopic eruption',
        'Class III with anterior crossbite; severely prominent incisors at trauma risk',
        'Habits such as thumb-sucking',
        'Time growth modification to the pubertal growth spurt']],
      ['s', 'What causes relapse, and how do retainers help?', [
        'Supracrestal gingival fibers remodel slowly, so teeth rebound',
        'Growth changes, soft-tissue pressure, original malocclusion',
        'Fixed bonded or removable (Hawley, clear) retainers',
        'Retention is long-term; discuss compliance and monitoring']],
      ['s', 'Compare fixed appliances with clear aligners.', [
        'Aligners: good for tipping and mild-to-moderate crowding, need 20–22 h/day wear',
        'Harder with rotations of round teeth, extrusion, large bodily movement',
        'Fixed appliances: more predictable for complex cases',
        'Patient preference, hygiene, and compliance drive the choice']],
      ['h', 'Explain anchorage and how temporary anchorage devices (TADs) change it.', [
        'Newton’s third law: every movement has a reaction',
        'Conventional anchorage: headgear, Nance, TPA, lip bumper, differential moments',
        'TADs give near-absolute anchorage; risks: root contact, loosening',
        'Common sites: interradicular bone and the palate']],
      ['h', 'What do SNA, SNB and ANB tell you, and what are their limits?', [
        'SNA about 82° (maxilla), SNB about 80° (mandible), ANB about 2°',
        'Higher ANB suggests Class II skeletal; negative suggests Class III',
        'Affected by nasion position and jaw rotation',
        'Cross-check with Wits appraisal and clinical exam']],
    ],
  },
  {
    key: 'pedo', name: 'Pediatric', hue: 236,
    q: [
      ['g', 'When do primary teeth erupt, and why are they important?', [
        'First teeth around 6 months (lower central incisors)',
        'Full set of 20 by about 2.5–3 years',
        'Chewing, speech, esthetics, and guiding permanent teeth into place',
        'Infection or early loss affects the permanent successors']],
      ['g', 'What is early childhood caries and how do you prevent it?', [
        'Caries in a child under 6, often from frequent sugar or bottle in bed',
        'Brush with fluoride toothpaste (smear under 3, pea-size 3–6)',
        'Limit sugary drinks and snacks; no sleeping with a bottle',
        'First dental visit by age 1; fluoride varnish']],
      ['s', 'Compare pulpotomy and pulpectomy in primary teeth.', [
        'Pulpotomy: vital pulp, remove coronal pulp, medicament (MTA etc.), crown',
        'Pulpectomy: necrotic or infected pulp, remove all, resorbable filling',
        'Avoid damaging the permanent tooth germ',
        'Restore with a stainless steel crown when indicated']],
      ['s', 'What behavior management techniques are used with children?', [
        'Basic: tell-show-do, positive reinforcement, distraction, modeling',
        'Advanced: protective stabilization, sedation, general anesthesia',
        'Parental consent and informed choice',
        'Tailor to age, anxiety, and the urgency of treatment']],
      ['s', 'How do you manage an avulsed permanent tooth?', [
        'Time is critical: replant immediately if possible',
        'If not, store in milk, saline, or a tooth-preservation medium; never dry',
        'Flexible splint for about 2 weeks; consider antibiotics and tetanus status',
        'Root canal treatment timing depends on apex maturity; never replant primary teeth']],
      ['h', 'When are space maintainers indicated, and what is the leeway space?', [
        'Early loss of primary molars, especially before the first permanent molar erupts',
        'Band-and-loop, lingual holding arch, distal shoe',
        'Leeway space: primary molars are wider than their premolar successors',
        'About 1.7 mm per side in the mandible and 0.9 mm in the maxilla']],
      ['h', 'What is molar-incisor hypomineralization and how is it managed?', [
        'Hypomineralized first permanent molars and often incisors',
        'Yellow-brown opacities, post-eruptive breakdown, hypersensitivity',
        'Difficult anesthesia, high caries risk',
        'Desensitizing, sealants, glass ionomer, stainless steel crowns, timed extraction']],
    ],
  },
  {
    key: 'surg', name: 'Oral Surgery', hue: 262,
    q: [
      ['g', 'What are common indications for tooth extraction?', [
        'Unrestorable caries, advanced periodontal disease',
        'Impacted or repeatedly infected third molars',
        'Orthodontic needs, trauma, pre-radiotherapy clearance',
        'Always weigh alternatives and the patient’s medical status']],
      ['g', 'Describe socket healing and what a dry socket is.', [
        'Clot, granulation tissue, epithelial closure, then bone fill over weeks to months',
        'Dry socket: clot lost around days 2–4, severe pain, bad taste',
        'Risks: smoking, difficult lower molar extraction, oral contraceptives',
        'Treat with irrigation and a medicated dressing']],
      ['s', 'How do you assess an impacted third molar?', [
        'Pell & Gregory: depth (A–C) and ramus relation (I–III)',
        'Winter: mesioangular, distoangular, vertical, horizontal',
        'Look for inferior alveolar nerve proximity signs on the radiograph',
        'Consider CBCT when nerve risk is high']],
      ['s', 'What is the role of antibiotics in dental infections?', [
        'Source control (drainage, treat the tooth) comes first',
        'Antibiotics help with systemic involvement, spreading cellulitis, or immunocompromise',
        'Amoxicillin first line; alternatives for penicillin allergy',
        'Stewardship: avoid unnecessary prescriptions']],
      ['s', 'Why is Ludwig’s angina an emergency?', [
        'Bilateral cellulitis of submandibular, sublingual, and submental spaces',
        'Usually from lower molar infection; tongue elevates, airway is threatened',
        'Priorities: airway, IV antibiotics, surgical drainage',
        'Recognize trismus, drooling, and difficulty swallowing early']],
      ['h', 'Discuss MRONJ: risk factors and dental management.', [
        'Antiresorptives (bisphosphonates, denosumab) and some antiangiogenics',
        'Exposed necrotic bone for more than 8 weeks without radiation history',
        'Risk is higher with IV/oncology doses; very low at osteoporosis doses',
        'Prevention: dental clearance before therapy, atraumatic technique, good hygiene']],
      ['h', 'How do you manage extraction in a patient on warfarin or a DOAC?', [
        'Don’t stop anticoagulants routinely; check INR close to the procedure',
        'INR commonly accepted at or below about 3.5 for simple extractions',
        'Local measures: sutures, oxidized cellulose, tranexamic acid mouthwash',
        'DOACs: timing of dose around the procedure; coordinate with the physician']],
    ],
  },
  {
    key: 'prostho', name: 'Prosthodontics', hue: 290,
    q: [
      ['g', 'Compare crowns, bridges, and implants for replacing or restoring teeth.', [
        'Crown: restores a compromised tooth',
        'Bridge: replaces a tooth using adjacent teeth as abutments',
        'Implant: replaces the root, preserves neighbors, needs bone and surgery',
        'Cost, bone, hygiene, medical history, and patient preference decide']],
      ['g', 'What are the key stages of making complete dentures?', [
        'Preliminary impressions, custom trays, final impressions',
        'Jaw relation records: vertical dimension and centric relation',
        'Teeth set-up and try-in',
        'Processing, insertion, and adjustments']],
      ['s', 'What principles guide tooth preparation for a full-coverage crown?', [
        'Retention and resistance form; slight taper',
        'Adequate occlusal reduction for the chosen material (about 1.5–2 mm)',
        'Margin design and location relative to the gingiva',
        'Preserve tooth structure; ferrule when restoring a root-filled tooth']],
      ['s', 'Compare monolithic zirconia, lithium disilicate, and PFM.', [
        'Zirconia: strongest, less translucent, minimal chipping if monolithic',
        'Lithium disilicate: very esthetic, bonded, moderate strength',
        'PFM: metal strength with esthetic compromises and porcelain chipping',
        'Match material to location, occlusion, and esthetic demand']],
      ['s', 'How do you determine vertical dimension of occlusion?', [
        'Rest vertical dimension minus the freeway space (about 2–4 mm)',
        'Phonetics: closest speaking space',
        'Facial proportions and esthetics',
        'Pre-extraction records and old dentures help']],
      ['h', 'Explain the Kennedy classification and basic RPD design principles.', [
        'Class I bilateral free-end; II unilateral free-end; III bounded; IV anterior crossing the midline',
        'Components: major connector, rests, direct and indirect retainers, bases',
        'Free-end saddles need tissue support and stress control',
        'Survey the cast, plan guide planes and path of insertion']],
      ['h', 'What determines implant success, and what is peri-implantitis?', [
        'Primary stability, bone quality/quantity, hygiene, smoking, diabetes',
        'Peri-implant mucositis: reversible inflammation',
        'Peri-implantitis: inflammation with progressive bone loss, bleeding or pus',
        'Treatment: non-surgical decontamination, surgical and regenerative options']],
    ],
  },
  {
    key: 'resto', name: 'Restorative', hue: 330,
    q: [
      ['g', 'Compare amalgam and composite restorations.', [
        'Amalgam: durable, cost-effective, less technique-sensitive; mercury concerns and no bonding',
        'Composite: esthetic, adhesive, conservative, more technique-sensitive',
        'Polymerization shrinkage and moisture control matter for composite',
        'Policy trends are reducing amalgam use']],
      ['g', 'What causes dental caries, and how does it progress?', [
        'Biofilm + fermentable carbohydrates + host factors over time',
        'Acid dissolves mineral when pH falls below the critical pH',
        'White spot, then enamel, dentin, and pulp involvement',
        'Remineralization with fluoride can arrest early lesions']],
      ['s', 'Explain G.V. Black’s cavity classification.', [
        'I: pits and fissures; II: proximal surfaces of posterior teeth',
        'III: proximal of anterior teeth without incisal edge; IV: with incisal edge',
        'V: cervical third; VI: cusp tips or incisal edges',
        'Modern thinking is more minimally invasive']],
      ['s', 'What is polymerization shrinkage and the C-factor?', [
        'Composite shrinks as it cures, stressing the bond',
        'C-factor: ratio of bonded to unbonded surfaces; deep boxes are worst',
        'Manage with incremental layering (about 2 mm) and good light curing',
        'Bulk-fill and low-shrink materials, plus liners, can help']],
      ['s', 'Compare etch-and-rinse, self-etch, and universal adhesives.', [
        'Etch-and-rinse: phosphoric acid, strong enamel bond',
        'Self-etch: acidic primer, less post-op sensitivity risk',
        'Universal: can be used in either mode; selective enamel etching is often advised',
        'Moisture control and correct dentin hydration are key']],
      ['h', 'Explain the hybrid layer and why bonding to enamel differs from dentin.', [
        'Enamel: highly mineralized, etching creates micro-retention for resin tags',
        'Dentin: tubular, wet, with a collagen network',
        'Resin infiltrates demineralized collagen to form the hybrid layer',
        'Long-term degradation: hydrolysis and enzymes (MMPs)']],
      ['h', 'What is biological width and how does it affect restorative margins?', [
        'About 2 mm of supracrestal soft tissue attachment',
        'Junctional epithelium plus connective tissue attachment',
        'Margin too close to the bone causes chronic inflammation and bone loss',
        'Solution: crown lengthening or orthodontic extrusion']],
    ],
  },
  {
    key: 'path', name: 'Oral Pathology', hue: 8,
    q: [
      ['g', 'How do you approach a white lesion in the mouth?', [
        'History: duration, tobacco, trauma, symptoms',
        'Does it wipe off (candidiasis)? Is it frictional?',
        'Leukoplakia is a clinical diagnosis of exclusion; consider biopsy',
        'Other causes: lichen planus, white sponge nevus']],
      ['g', 'What are the risk factors and early signs of oral cancer?', [
        'Tobacco and alcohol (synergistic), HPV16, betel quid, sun (lip)',
        'Non-healing ulcer over about 2 weeks, red/white patches, induration',
        'High-risk sites: lateral tongue, floor of mouth',
        'Early detection and biopsy save lives']],
      ['s', 'Describe oral lichen planus.', [
        'T-cell mediated condition, often bilateral on buccal mucosa',
        'Reticular (Wickham striae) vs. erosive forms',
        'Erosive form is symptomatic and has a small malignant potential',
        'Topical corticosteroids; long-term follow-up']],
      ['s', 'Differentiate aphthous ulcers from herpes labialis.', [
        'Aphthous: non-keratinized mucosa, not contagious; minor, major, herpetiform types',
        'Herpes labialis: HSV-1, lip border, vesicles with prodrome',
        'Aphthous minor heals in 1–2 weeks without scarring',
        'Early antiviral for herpes; topical care for aphthae']],
      ['s', 'Compare dentigerous cyst, odontogenic keratocyst, and radicular cyst.', [
        'Dentigerous: around the crown of an unerupted tooth, often a lower third molar',
        'OKC: parakeratinized lining, tends to recur; link with Gorlin syndrome (PTCH1)',
        'Radicular: at the apex of a non-vital tooth',
        'Treatment varies from endodontics to enucleation or more']],
      ['h', 'Ameloblastoma: features, variants, and treatment.', [
        'Benign but locally aggressive odontogenic tumor, mostly posterior mandible',
        'Multilocular “soap-bubble” appearance; follicular and plexiform patterns',
        'BRAF V600E mutation common in many cases',
        'Solid/multicystic types need resection with margins; unicystic can be more conservative']],
      ['h', 'Sjögren’s syndrome: oral manifestations and dental implications.', [
        'Autoimmune destruction of exocrine glands: dry mouth and dry eyes',
        'Rampant cervical caries, candidiasis, salivary gland enlargement',
        'Anti-Ro/SSA and anti-La/SSB antibodies; increased lymphoma risk',
        'Fluoride, saliva substitutes, sialogogues, frequent recalls']],
    ],
  },
  {
    key: 'rad', name: 'Radiology', hue: 28,
    q: [
      ['g', 'Compare periapical, bitewing, and panoramic radiographs.', [
        'Periapical: whole tooth and surrounding bone',
        'Bitewing: crowns and interproximal bone level, best for caries',
        'Panoramic: overview of jaws, lower dose, lower detail',
        'Choose based on clinical question, not routine']],
      ['g', 'What is ALARA and how do you protect patients from radiation?', [
        'As Low As Reasonably Achievable',
        'Justify every exposure and optimize it',
        'Rectangular collimation, fast receptors, protective measures per local guidance',
        'Digital sensors reduce dose']],
      ['s', 'Paralleling versus bisecting angle technique?', [
        'Paralleling: receptor parallel to the long axis, long cone, minimal distortion',
        'Bisecting: aim perpendicular to the bisector; can elongate or foreshorten',
        'Paralleling is the technique of choice when anatomy allows',
        'Bisecting is a fallback when the palate or floor prevents placement']],
      ['s', 'What are the limits of radiographs for detecting caries?', [
        'Lesions show late: need substantial demineralization to appear',
        'Underestimates lesion depth',
        'Occlusal caries is often hidden; cervical burnout mimics decay',
        'Combine with clinical exam']],
      ['s', 'Name common errors in panoramic imaging.', [
        'Chin too high or too low alters the occlusal plane curve',
        'Patient forward or back changes tooth width',
        'Tongue not against the palate gives a dark band over maxillary teeth',
        'Ghost images from jewelry']],
      ['h', 'CBCT: indications and limitations.', [
        'Implant planning, impactions, complex endodontics, pathology, TMJ',
        'Higher dose than intraoral films; must be justified',
        'Limited soft-tissue contrast; metal artifacts',
        'Field of view selection influences dose and utility']],
      ['h', 'A periapical radiolucency on a vital mandibular incisor: what are you thinking?', [
        'Always perform pulp sensibility testing',
        'Periapical cemento-osseous dysplasia: lucent, mixed, then radiopaque stages',
        'Teeth are vital and no treatment is needed',
        'Avoid unnecessary root canal treatment; monitor']],
    ],
  },
  {
    key: 'pharm', name: 'Pharmacology', hue: 44,
    q: [
      ['g', 'How do local anesthetics work?', [
        'Block voltage-gated sodium channels from inside the nerve',
        'Weak bases: need the uncharged form to cross the membrane',
        'Infection lowers tissue pH, which reduces effect',
        'Lidocaine 2% with 1:100,000 epinephrine is a common choice']],
      ['g', 'Why is epinephrine added to local anesthetic?', [
        'Vasoconstriction prolongs duration and improves depth',
        'Reduces bleeding and systemic absorption',
        'Cardiac patients: limit dose (about 0.04 mg, roughly two cartridges of 1:100,000)',
        'Avoid intravascular injection']],
      ['s', 'Describe inferior alveolar nerve block landmarks and complications.', [
        'Landmarks: pterygomandibular raphe, coronoid notch, occlusal plane',
        'Needle from the opposite premolar area, aspirate before injecting',
        'Complications: hematoma, trismus, transient facial palsy, nerve injury',
        'Failure causes: anatomical variation, accessory innervation, infection']],
      ['s', 'Compare ester and amide local anesthetics; allergy considerations.', [
        'Esters (procaine, benzocaine): plasma metabolism, PABA allergy',
        'Amides (lidocaine, articaine, mepivacaine, bupivacaine): hepatic metabolism',
        'True allergy is rare; clarify the history',
        'Sulfite preservatives in epinephrine-containing solutions can matter']],
      ['s', 'What is your approach to post-operative dental pain?', [
        'NSAID plus acetaminophen is often as effective as opioid combinations',
        'Opioid-sparing prescribing',
        'Check contraindications: kidney disease, ulcers, anticoagulants, pregnancy',
        'Counsel on dosing and expectations']],
      ['h', 'Articaine versus lidocaine: advantages, myths, and risks.', [
        'Thiophene ring and ester group; plasma hydrolysis of metabolite',
        'Better diffusion; useful for infiltration in some cases',
        'Paresthesia concern: evidence does not show clear excess risk',
        'Dose by weight; watch hepatic function and pediatric dosing']],
      ['h', 'Medical emergencies in the chair: syncope, anaphylaxis, hypoglycemia, angina.', [
        'Syncope: supine with legs raised, monitor',
        'Anaphylaxis: IM epinephrine to the thigh, call EMS, airway and oxygen',
        'Hypoglycemia: oral glucose if conscious, glucagon IM if not',
        'Angina: stop, sit, nitroglycerin, oxygen, call EMS if unrelieved']],
    ],
  },
  {
    key: 'anat', name: 'Dental Anatomy', hue: 78,
    q: [
      ['g', 'How many teeth are in the adult and child dentition, and what types?', [
        'Adult: 32 (8 incisors, 4 canines, 8 premolars, 12 molars)',
        'Child: 20 (8 incisors, 4 canines, 8 molars)',
        'No primary premolars; primary molars are replaced by premolars',
        'Third molars are the last to erupt']],
      ['g', 'Describe the layers and tissues of a tooth.', [
        'Enamel: hardest tissue, acellular, mostly mineral',
        'Dentin: tubular, forms the bulk of the tooth',
        'Cementum covers the root; pulp holds nerves and vessels',
        'Landmarks: DEJ and CEJ']],
      ['s', 'Which nerves supply the teeth, and how does this guide anesthesia?', [
        'Maxilla: posterior, middle, and anterior superior alveolar nerves (V2)',
        'Mandible: inferior alveolar nerve (V3) with mental and incisive branches',
        'Buccal soft tissue: long buccal nerve; lingual tissue: lingual nerve',
        'Infiltration works in the maxilla; blocks are often needed in the mandible']],
      ['s', 'What distinguishes the maxillary first molar from the mandibular first molar?', [
        'Maxillary: 4 main cusps plus cusp of Carabelli, oblique ridge, three roots',
        'Mandibular: 5 cusps, two roots',
        'Mandibular first molar is the first permanent tooth to erupt (about age 6)',
        'Shapes help with identification and cavity design']],
      ['s', 'Outline the eruption chronology of permanent teeth.', [
        'First molars and lower central incisors around 6',
        'Incisors by about 8; canines and premolars about 9–12',
        'Second molars about 11–13; third molars about 17–25',
        'Order differs slightly between arches']],
      ['h', 'Describe the facial “danger triangle” and why infections there are dangerous.', [
        'Area from the corners of the mouth to the nasal bridge',
        'Facial veins connect via the angular and ophthalmic veins to the cavernous sinus',
        'These veins are valveless, so flow can reverse',
        'Risk: cavernous sinus thrombosis; avoid squeezing facial infections']],
      ['h', 'TMJ anatomy and common disorders.', [
        'Condyle, articular disc, glenoid fossa, and articular eminence',
        'Hinge then translation movement; lateral pterygoid role in opening',
        'Disorders: disc displacement with/without reduction, myofascial pain, arthritis',
        'First-line care is conservative and reversible']],
    ],
  },
  {
    key: 'pubh', name: 'Public Health', hue: 128,
    q: [
      ['g', 'How does fluoride prevent caries, and what is the fluorosis risk?', [
        'Topical effect: remineralization and fluorapatite formation',
        'Inhibits bacterial metabolism',
        'Excess during tooth development causes fluorosis',
        'Optimal water fluoridation level is around 0.7 ppm in many guidelines']],
      ['g', 'What are standard infection control precautions in a dental clinic?', [
        'Hand hygiene and personal protective equipment',
        'Instrument sterilization, surface disinfection, sharps safety',
        'Dental unit waterline management',
        'Sterilization monitoring including biological indicators']],
      ['s', 'Apply the Spaulding classification to dental instruments.', [
        'Critical: penetrate tissue or bone (surgical instruments, burs): sterilize',
        'Semi-critical: contact mucosa (mirrors, handpieces): heat-sterilize',
        'Non-critical: contact intact skin: disinfect',
        'Matches the level of processing to infection risk']],
      ['s', 'How would you manage a needlestick injury?', [
        'Wash the area with soap and water; do not squeeze',
        'Report immediately; assess the source patient (with consent)',
        'Baseline testing and hepatitis B immunity review',
        'HIV post-exposure prophylaxis as soon as possible if indicated; follow-up']],
      ['s', 'What do DMFT and ICDAS measure?', [
        'DMFT: decayed, missing, filled permanent teeth (dmft for primary)',
        'Useful for population surveys; ignores early lesions and treatment need',
        'ICDAS grades caries severity including early lesions',
        'Use to plan prevention and track outcomes']],
      ['h', 'How would you appraise a clinical study using levels of evidence?', [
        'Hierarchy: systematic review, RCT, cohort, case-control, case series, opinion',
        'Use PICO to frame the question',
        'Check bias, confounding, sample size, follow-up',
        'Statistical vs. clinical significance']],
      ['h', 'Ethics: how would you handle a patient refusing recommended treatment, or a minor’s consent?', [
        'Autonomy, beneficence, non-maleficence, justice',
        'Informed consent requires capacity and understanding of risks and alternatives',
        'Minors: parents or guardians, with local rules for mature minors',
        'Document the discussion; know the limits of confidentiality']],
    ],
  },
];
