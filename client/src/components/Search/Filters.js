const filters = [
  {
    label: 'Gender',
    name: 'gender',
    class: 'primary',
    options: [
      { value: 'female', text: 'Female' },
      { value: 'male', text: 'Male' },
      { value: 'transgender', text: 'Transgender/Non-Binary' },
      { value: 'twins', text: 'Twins/Multiples' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Body type',
    name: 'measurements.bodyType',
    class: 'appearance',
    options: [
      { value: 'slender', text: 'Slender' },
      { value: 'very thin', text: 'Very thin' },
      { value: 'average', text: 'Average' },
      { value: 'athletic', text: 'Athletic' },
      { value: 'husky', text: 'Husky' },
      { value: 'body builder', text: 'Body builder' },
      { value: 'large', text: 'Large' },
      { value: 'n/a', text: 'n/a' }
    ],
    multiple: true,
    input: false,
    type:'select'
  }, {
    label: 'Nudity',
    name: 'nudity',
    class: 'appearance',
    options: [
      { value: 'none', text: 'No Nudity'},
      { value: 'partial', text: 'Partial Nudity' },
      { value: 'full', text: 'Full Nudity' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Ethnic Appearance',
    name: 'ethnicity',
    class: 'appearance',
    options: [
      { value: 'african', text: 'African' },
      { value: 'caucassian', text: 'Caucassian' },
      { value: 'east asian', text: 'East Asian' },
      { value: 'hispanic', text: 'Hispanic' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Body Modifications',
    name: 'bodyModifications',
    class: 'appearance',
    options: [
      { value: 'piercings', text: 'Piercings' },
      { value: 'tatoos', text: 'Tatoos' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Hair color',
    name: 'hairColor',
    class: 'appearance',
    options: [
      { value: 'black', text: 'Black' },
      { value: 'blonde', text: 'Blonde' },
      { value: 'brown', text: 'Brown' },
      { value: 'grey', text: 'Grey' },
      { value: 'red', text: 'Red' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Hair Length',
    name: 'hairLength',
    class: 'appearance',
    options: [
      { value: 'afro', text: 'Afro' },
      { value: 'bald', text: 'Bald' },
      { value: 'dreadlocks', text: 'Dreadlocks' },
      { value: 'long', text: 'Long' },
      { value: 'short', text: 'Short' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Eye color',
    name: 'eyeColor',
    class: 'appearance',
    options: [
      { value: 'blue', text: 'Blue' },
      { value: 'brown', text: 'Brown' },
      { value: 'green', text: 'Green' },
      { value: 'black', text: 'Black' },
      { value: 'grey', text: 'Grey' },
      { value: 'hazel', text: 'Hazel' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Cast',
    name: 'cast',
    class: 'primary',
    options: [
      { value: 'actor', text: 'Actor' },
      { value: 'stunt actor', text: 'Stunt Actor' },
      { value: 'dj', text: 'DJ' },
      { value: 'singer', text: 'Singer' },
      { value: 'painter', text: 'Painter' },
      { value: 'model', text: 'Model' }
    ],
    multiple: false,
    input: true,
    type:'select'
  }, {
    label: 'Filmmakers',
    name: 'filmmakers',
    class: 'experience',
    options: [
      { value: 'director', text: 'Director' },
      { value: 'producer', text: 'Producer' },
      { value: 'cinematographer', text: 'Cinematographer' },
      { value: 'film editor', text: 'Film editor' },
      { value: 'graphic artist', text: 'Graphic artist' },
      { value: 'composer', text: 'Composer' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Athletic Endeavors',
    name: 'athleticEndeavors',
    class: 'skills',
    options: [
      { value: 'diving', text: 'Diving' },
      { value: 'tennis', text: 'Tennis' },
      { value: 'football', text: 'Football' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Performance',
    name: 'performance',
    class: 'experience',
    options: [
      { value: 'comedian', text: 'Comedian' },
      { value: 'modeling', text: 'Modeling' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Active years in profession',
    name: 'professionYears',
    class: 'primary',
    options: [
      { value: '0', text: '< 1' },
      { value: '1', text: '1 year' },
      { value: '2', text: '2 years' },
      { value: '3', text: '3 years' },
      { value: '4', text: '4 years' },
      { value: '5', text: '5 years' },
      { value: '6', text: '6 years' },
      { value: '7', text: '7 years' },
      { value: '8', text: '8 years' },
      { value: '9', text: '9 years' },
      { value: '10', text: '10 <' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Accents',
    name: 'accent',
    class: 'skills',
    options: [
      { value: 'eastern eurpoean', text: 'Eastern European' },
      { value: 'russian', text: 'Russian' },
      { value: 'Finnish', text: 'Finnish' },
      { value: 'Swedish', text: 'Swedish' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Languages',
    name: 'languages',
    class: 'skills',
    options: [
      { value: 'english', text: 'English' },
      { value: 'swedish', text: 'Swedish' },
      { value: 'german', text: 'German' },
      { value: 'spanish', text: 'Spanish' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, {
    label: 'Disabilities',
    name: 'disabilities',
    class: 'skills',
    options: [
      { value: 'autism', text: 'Autism' },
      { value: 'amputee', text: 'Amputee' }
    ],
    multiple: true,
    input: true,
    type:'select'
  }, 
  // Measurements
  {
    label: 'Shirt size',
    name: 'measurements.shirtSize',
    class: 'measurements',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' },
      { value: 'xl', text: 'XL' },
      { value: 'xxl', text: 'XXL' },
      { value: 'xxxl', text: 'XXXL' },
      { value: 'n/a', text: 'n/a' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Jacket length',
    name: 'measurements.jacketLength',
    class: 'measurements',
    options: [
      { value: 's', text: 'S' },
      { value: 'm', text: 'M' },
      { value: 'l', text: 'L' }
    ],
    type: 'select'
  }, {
    label: 'Shoe width',
    name: 'measurements.shoeWidth',
    class: 'measurements',
    options: [
      { value: 'a', text: 'A' },
      { value: 'aa', text: 'AA' },
      { value: 'aaa', text: 'AAA' },
      { value: 'b', text: 'B' },
      { value: 'd', text: 'D' },
      { value: 'e', text: 'E' },
      { value: 'ee', text: 'EE' },
      { value: 'eee', text: 'EEE' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Shoe Length',
    unit: "'",
    name: 'measurements.shoeLength',
    class: 'measurements',
    min: 1,
    max: 17,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Gloves',
    name: 'measurements.gloves',
    class: 'measurements',
    options: [
      { value: 'xsm', text: 'XSM' },
      { value: 'sm', text: 'SM' },
      { value: 'm', text: 'M' },
      { value: 'lg', text: 'LG' },
      { value: 'xlg', text: 'XLG' }
    ],
    multiple: false,
    input: false,
    type:'select'
  }, {
    label: 'Height',
    unit: "'",
    name: 'measurements.height',
    class: 'measurements',
    min: 40,
    max: 120,
    type: 'range'    
  }, {
    label: 'Weight',
    unit: 'lbs',
    name: 'measurements.weight',
    class: 'measurements',
    min: 50,
    max: 280,
    type: 'range'    
  }, {
    label: 'Sleeve Length',
    unit: "'",
    name: 'measurements.sleeveLength',
    class: 'measurements',
    min: 29,
    max: 40,
    type: 'range'    
  }, {
    label: 'Neck',
    unit: "'",
    name: 'measurements.neck',
    class: 'measurements',
    min: 12,
    max: 25,
    step:0.5,
    type: 'range'    
  }, {
    label: 'Jacket Chest',
    unit: "'",
    name: 'measurements.jacketChest',
    class: 'measurements',
    min: 32,
    max: 58,
    type: 'range'    
  }, {
    label: 'Waist',
    unit: "'",
    name: 'measurements.waist',
    class: 'measurements',
    min: 18,
    max: 58,
    type: 'range'    
  }, {
    label: 'Inseam',
    unit: "'",
    name: 'measurements.inseam',
    class: 'measurements',
    min: 25,
    max: 40,
    type: 'range'    
  }, {
    label: 'Social Media',
    name: 'socialMedia.name',
    options: [
      { value: 'facebook', text: 'Facebook' },
      { value: 'instagram', text: 'Instagram' },
      { value: 'twitter', text: 'Twitter' }
    ],
    multiple: true,
    input: false,
    type:'select'
  }
]

export default filters
