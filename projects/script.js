var projectsArray = [

    {
        title: "Company Landing Page",
        desc,
        link:"https://syedabdulw.github.io/projects/",
        code:"https://syedabdulw.github.io/projects/",
    },
    {
        title, 
        desc,
        link,
        code,
    },
    {
        title, 
        desc,
        link,
        code,
    },
    {
        title, 
        desc,
        link,
        code,
    }
];



  // border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden
 
  
  var projectssList = document.getElementById("JS-all-projects");
  
  for (var i = 0; i < projectsArray.length; i++) {
    var div =
     ` <div class=" p-4 md:w-1/3 ">
    <div
      class="h-full  ml-8 mt-5 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse "
    >
      <div class="bg-[#581c87] p-6 ">
        <h1 class="title-font text-lg font-medium text-white mb-3">
         ${projectsArray[i].title} 
        </h1>
        <p class="text-[#5eead4] leading-relaxed mb-3">${projectsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
            href="${projectsArray[i].link}"
            class="text-[#fecdd3] inline-flex items-center md:mb-2 lg:mb-0"
            >See Preview
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
              href="${projectsArray[i].code}"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>`;
  
  var contact = ''
    projectsList.innerHTML += div;
  }


//title: "Weather App",
//code: "https://github.com/issabaloach/Prodigy_WD_1",
//link: "https://issabaloach.github.io/Prodigy_WD_1/",
//date: "19-june-2024",
//description: "This weather app fetch the weather API from openweather and this changes background image on every discription change ",
//},