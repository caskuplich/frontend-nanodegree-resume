var bio = {
  name: 'George Costanza',
  role: 'Assistant to the Traveling Secretary',
  contacts: {
    mobile: '650-555-8383',
    email: 'costanza@yankees.com',
    github: 'biffloman',
    twitter: '@costanza',
    location: 'Manhattan, NY'
  },
  welcomeMessage: "I'm an Architect!",
  skills: [
    'Knowledge of best public bathrooms in NY',
    'Fast understanding',
    'Great quitter'
  ],
  biopic: 'images/george-costanza.jpg',
  display: function() {
    $('#header').prepend(formattedData(HTMLheaderRole, bio.role));
    $('#header').prepend(formattedData(HTMLheaderName, bio.name));

    this.displayContacts('#topContacts');

    $('#header').append(formattedData(HTMLbioPic, bio.biopic));
    $('#header').append(formattedData(HTMLwelcomeMsg, bio.welcomeMessage));

    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      $('#skills').append(formattedData(HTMLskills, skill));
    });

    this.displayContacts('#footerContacts');
  },
  displayContacts: function(container) {
    $(container).append(formattedData(HTMLmobile, bio.contacts.mobile));
    $(container).append(formattedData(HTMLemail, bio.contacts.email));
    $(container).append(formattedData(HTMLgithub, bio.contacts.github));

    if (bio.contacts.twitter !== undefined) {
      $(container).append(formattedData(HTMLtwitter, bio.contacts.twitter));
    }
    $(container).append(formattedData(HTMLlocation, bio.contacts.location));
  }
};

var work = {
  jobs: [
    {
      employer: 'New York Yankees',
      title: 'Assistant to the Traveling Secretary',
      location: 'Bronx, NY',
      dates: 'in progress',
      description: 'I became Steinbrenner’s right hand man, where I pitched ' +
        'his ideas for extending the bathroom stall walls all the way to ' +
        'floor, and a lost and found at the stadium.'
    },
    {
      employer: 'Sanalac',
      title: 'Sales rep rest stop supply',
      location: 'Manhattan, NY',
      dates: '1993',
      description: 'I worked on the Penske file.'
    },
    {
      employer: 'NBC',
      title: 'Writer for a sitcom pilot',
      location: 'Manhattan, NY',
      dates: '1992-1993',
      description: 'I gained experience as a sitcom writer as I helped Jerry ' +
        'to write the pilot for the fictitious show "Jerry".'
    },
    {
      employer: 'Rick Bahr Properties',
      title: 'Real estate agent',
      location: 'Manhattan, NY',
      dates: '1989-1991',
      description: 'I quit and get re-hired, but fired immediately afterward.'
    }
  ],
  display: function() {
    work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);

      var employer = formattedData(HTMLworkEmployer, job.employer);
      var title = formattedData(HTMLworkTitle, job.title);
      $('.work-entry:last').append(employer + title);

      $('.work-entry:last').append(formattedData(HTMLworkDates, job.dates));
      $('.work-entry:last').append(formattedData(HTMLworkLocation, job.location));
      $('.work-entry:last').append(formattedData(HTMLworkDescription, job.description));
    });
  }
};

var projects = {
  projects: [
    {
      title: 'Jerry',
      dates: '1993',
      description: 'Pilot for the TV show "Jerry", a show about nothing.',
      images: [
        'images/jerry1.jpg',
        'images/jerry2.jpg',
        'images/jerry3.jpg',
        'images/jerry4.jpg'
      ]
    },
    {
      title: 'New Addition to the Guggenheim',
      dates: '1992',
      description: "It didn't take very long, either.",
      images: [
        'images/guggenheim1.jpg',
        'images/guggenheim2.jpg'
      ]
    }
  ],
  display: function () {
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedData(HTMLprojectTitle, project.title));
      $('.project-entry:last').append(formattedData(HTMLprojectDates, project.dates));
      $('.project-entry:last').append(formattedData(HTMLprojectDescription, project.description));
      project.images.forEach(function(image) {
        $('.project-entry:last').append(formattedData(HTMLprojectImage, image));
      });
    });
  }
};

var education = {
  schools: [
    {
      name: 'Queens College',
      location: 'Queens, NY',
      degree: 'Bachelor',
      majors: ['Podiatry'],
      dates: '1980-1986',
      url: 'http://www.qc.cuny.edu/'
    },
    {
      name: 'John F. Kennedy High School',
      location: 'Long Island, NY',
      degree: 'diploma',
      majors: [
        'solid C average, right in the meaty part of the curve',
        'Frogger high score'
      ],
      dates: '1977-1980',
      url: 'http://www.jfkcougars.org/'
    }
  ],
  onlineCourses: [
    {
      title: 'Creative Writing: The Craft of Plot',
      school: 'Coursera',
      dates: '1992',
      url: 'https://www.coursera.org/learn/craft-of-plot'
    },
    {
      title: 'Making Architecture',
      school: 'Coursera',
      dates: '1990',
      url: 'https://www.coursera.org/learn/making-architecture'
    }
  ],
  display: function() {
    education.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);

      var schoolName = formattedData(HTMLschoolName, school.name);
      var degree = formattedData(HTMLschoolDegree, school.degree);
      $('.education-entry:last').append(schoolName + degree);

      $('.education-entry:last').append(formattedData(HTMLschoolDates, school.dates));
      $('.education-entry:last').append(formattedData(HTMLschoolLocation, school.location));
      school.majors.forEach(function(major) {
        $('.education-entry:last').append(formattedData(HTMLschoolMajor, major));
      });
    });

    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);

      var title = formattedData(HTMLonlineTitle, course.title);
      var school = formattedData(HTMLonlineSchool, course.school);
      $('.education-entry:last').append(title + school);

      $('.education-entry:last').append(formattedData(HTMLonlineDates, course.dates));
      $('.education-entry:last').append(formattedData(HTMLonlineURL, course.url));
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
