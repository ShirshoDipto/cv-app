import { v4 as uuidv4 } from "uuid";
const data = {
  personalInfo: {
    firstName: "Md Shirsho",
    lastName: "Dipto Haque",
    title: "Junior Software Engineer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempora sequi architecto quidem quos consequatur exercitationem hic cumque nisi odit dicta nam soluta eligendi ad sit adipisci rerum, ratione possimus.",
    mobile: "+88017xxxxxxxx",
    address: "Kushtia, Bangladesh",
    email: "someeamil@gmail.com",
  },

  personalTemp: {
    firstName: "Md Shirsho",
    lastName: "Dipto Haque",
    title: "Junior Software Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima tempora sequi architecto quidem quos consequatur exercitationem hic cumque nisi odit dicta nam soluta eligendi ad sit adipisci rerum, ratione possimus.",
    mobile: "+88017xxxxxxxx",
    address: "Kushtia, Bangladesh",
    email: "someeamil@gmail.com",
  },

  workExperience: {
    id: uuidv4(),
    position: "",
    company: "",
    location: "",
    description: "",
    from: "",
    to: "",
  },

  education: {
    id: uuidv4(),
    institution: "",
    location: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  },

  workExperiences: [
    {
      id: uuidv4(),
      position: "Junior web developer",
      company: "Spotify",
      location: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores.",
      from: "2010",
      to: "2020",
    },
    {
      id: uuidv4(),
      position: "Programming Teacher",
      company: "Stanford University",
      location: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum! Illum, voluptates maiores.",
      from: "2021",
      to: "2022",
    },
  ],

  educations: [
    {
      id: uuidv4(),
      institution: "Kushtia Govt College",
      location: "Kushtia, Bangladesh",
      degree: "HSC",
      subject: "N/A",
      from: "2014",
      to: "2016",
    },
    {
      id: uuidv4(),
      institution: "Shahjalal University of Science And Technology",
      location: "Sylhet",
      degree: "BSc Engineering",
      subject: "Chemical Engineering",
      from: "2017",
      to: "2018",
    },
    {
      id: uuidv4(),
      institution: "Unknown",
      location: "Remote",
      degree: "N/A",
      subject: "N/A",
      from: "2023",
      to: "Present",
    },
  ],
};

export default data