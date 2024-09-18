
const urlparm = new URLSearchParams(window.location.search);
const userr = urlparm.get('userid'); 
const which = urlparm.get('which'); 

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const collapsibleContent = button.nextElementSibling;
            if (collapsibleContent.style.display === 'none' || collapsibleContent.style.display === '') {
                collapsibleContent.style.display = 'block';
                button.textContent = 'Read Less';
            } else {
                collapsibleContent.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });
})

// script.js

function searchSections() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");

    let selectectgry1 = document.querySelector('input[name="sec_catgry"]:checked').value;

    // Clear previous results
    resultsContainer.innerHTML = '';
    let sections = [];

    if(selectectgry1 == 'crim') {
    sections = [
        { title: "Sections 1 to 5", description: "Preliminary definitions and scope of the IPC.", link: 'section_1_5.php?which='+selectectgry1+'&sec=1-5', range: [1, 5] },
        { title: "Sections 6 to 52A", description: "General explanations and principles like definitions of terms, intention, exceptions, etc.", link: 'section_6_52.php?which='+selectectgry1+'&sec=6-52', range: [6, 52] },
        { title: "Sections 53 to 75", description: "Punishments such as fines, imprisonment, and death penalty guidelines.", link: 'section_53_75.php?which='+selectectgry1+'&ec=53-75', range: [53, 75] },
        { title: "Sections 76 to 106", description: "General Exceptions (e.g., acts done in self-defense or by mistake).", link: 'section_76_106.php?which='+selectectgry1+'&sec=76-106', range: [76, 106] },
        { title: "Sections 107 to 120", description: "Offenses related to abetment and conspiracy.", link: 'section_107_120.php?which='+selectectgry1+'&sec=107-120', range: [107, 120] },
        { title: "Sections 121 to 130", description: "Offenses against the State, such as treason or sedition.", link: 'section_121_130.php?which='+selectectgry1+'&sec=121-130', range: [121, 130] },
        { title: "Sections 141 to 160", description: "Offenses related to unlawful assembly and public tranquility.", link: 'section_141_160.php?which='+selectectgry1+'&sec=121-130', range: [141, 160] },
        { title: "Sections 191 to 229", description: "Offenses against justice like perjury or obstruction of justice.", link: 'section_191_229.php?which='+selectectgry1+'&sec=191-229', range: [191, 229] },
        { title: "Sections 299 to 377", description: "Crimes against the human body, including murder, assault, and rape.", link: 'section_299_377.php?which='+selectectgry1+'&sec=299-377', range: [299, 377] },
        { title: "Sections 378 to 462", description: "Crimes against property, such as theft, robbery, and arson.", link: 'section_378_462.php?which='+selectectgry1+'&sec=378-462', range: [378, 462] },
        { title: "Sections 463 to 489", description: "Forgery and counterfeiting.", link: 'section_463_489.php?which='+selectectgry1+'&sec=463-489', range: [463, 489] },
        { title: "Sections 499 to 510", description: "Defamation and other miscellaneous offenses.", link: 'section_499_510.php?which='+selectectgry1+'&sec=499_510', range: [499, 510] }
    ];
    }

    if(selectectgry1 == 'faml') {
        
    } 
    else if(selectectgry1 == 'civil') {

    }

    

    // If the query is empty, do not filter and return
    if (query.trim() === '') {
            const noResult = document.createElement("li");
            noResult.textContent = "Please Search anything.";
            resultsContainer.appendChild(noResult);
            return;
    }

    // Extract the number from the query if present
    const numberMatch = query.match(/\d+/);
    let sectionNumber = null;

    if (numberMatch) {
        sectionNumber = parseInt(numberMatch[0], 10); // Extract and convert the number
    }

    // Filter sections based on query
    const filteredSections = sections.filter(section => {
        // If section number is present, check if it falls within the range
        if (sectionNumber !== null) {
            return section.range[0] <= sectionNumber && section.range[1] >= sectionNumber;
        }

        // Otherwise, check if the query matches the title or description
        return section.title.toLowerCase().includes(query) || section.description.toLowerCase().includes(query);
    });

    // Display filtered results
    if (filteredSections.length > 0) {
        filteredSections.forEach(section => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${section.link}">${section.title} - ${section.description}</a>`;
                listItem.onclick = function() {
                    checklink(section.link);
                }
                resultsContainer.appendChild(listItem);
        });
    } else if (query !== '') {
        // If no results and search query exists
        const noResult = document.createElement("li");
        noResult.textContent = "No sections found for your query.";
        resultsContainer.appendChild(noResult);
    }

    function checklink(link) {
        const targetlink = 'section_1_5.php?which=crim&sec=1-5';

        if(link === targetlink) {
            window.location.href = link;
        } else {
                alert("Only Section 1 to 5 is Available...");
                window.location.href = 'index.php';
        }
    }

}


//redirection of laws through ?userid=
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to Family Law button

    document.getElementById('family-learn-more').addEventListener('click', function(e) {
        e.preventDefault();
        alert("Only Criminal Law sections are available right now.");
    });

    // Add event listener to Civil Law button
    document.getElementById('civil-learn-more').addEventListener('click', function(e) {
        e.preventDefault();
        alert("Only Criminal Law sections are available right now.");
    });

    // Add event listener to Criminal Law button (if needed)
    document.getElementById('criminal-learn-more').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'criminal_sections.php'+'?which=crim'; // Redirect to Criminal Law sections page
    });
});


//redirection of sections criminal through ?userid= &sec=
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to Family Law button

    document.getElementById('sec=53-75').addEventListener('click', function(e) {
        e.preventDefault();
        alert("Only Criminal Law sections are available right now.");
    });

    // Add event listener to Civil Law button
    document.getElementById('sec=6-52').addEventListener('click', function(e) {
        e.preventDefault();
        alert("Only Criminal Law sections are available right now.");
    });

    // Add event listener to Criminal Law button (if needed)
    document.getElementById('sec=1-5').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'section_1_5.php?which='+which+'&sec=1-5'; // Redirect to Criminal Law sections page
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function initializeFlashcards(sectionId, flashcardData) {
        const flashcardBtn = document.getElementById(`flashcard-btn-${sectionId}`);
        const flashcardContainer = document.getElementById(`flashcard-container-${sectionId}`);

        // Function to display flashcards
        function generateFlashcards(cards, container) {
            let flashcardHTML = '<div class="flashcard-slider">';
            cards.forEach(card => {
                flashcardHTML += `
                    <div class="flashcard">
                        <div class="flashcard-content">
                            <h3>${card.title}</h3>
                            <p>${card.content}</p>
                        </div>
                    </div>`;
            });
            flashcardHTML += '</div>';
            flashcardHTML += `
                <div class="flashcard-controls">
                    <a href="#" id="prev-btn-${sectionId}" class="control-btn">Previous</a>
                    <a href="#" id="next-btn-${sectionId}" class="control-btn">Next</a>
                    <a href="#" id="close-btn-${sectionId}" class="control-btn close-btn" style="background-color: red"><img src="afterlogin/img/cross.svg" alt="Close" class="close-icon"></a>
                </div>`;
            container.innerHTML = flashcardHTML;
        }

        // Generate flashcards when the button is clicked
        flashcardBtn.addEventListener('click', function() {
            generateFlashcards(flashcardData, flashcardContainer);
            flashcardContainer.style.display = 'block';

            // Add functionality to navigate flashcards
            let currentFlashcardIndex = 0;
            const flashcards = flashcardContainer.querySelectorAll('.flashcard');
            const prevBtn = document.getElementById(`prev-btn-${sectionId}`);
            const nextBtn = document.getElementById(`next-btn-${sectionId}`);
            const closeBtn = document.getElementById(`close-btn-${sectionId}`);

            // Show the first flashcard
            flashcards[currentFlashcardIndex].style.display = 'block';

            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                flashcards[currentFlashcardIndex].style.display = 'none';
                currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
                flashcards[currentFlashcardIndex].style.display = 'block';
            });

            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                flashcards[currentFlashcardIndex].style.display = 'none';
                currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcards.length) % flashcards.length;
                flashcards[currentFlashcardIndex].style.display = 'block';
            });

            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                flashcardContainer.style.display = 'none';
            });
        });
    }

    // Data for flashcards
    const section1Flashcards = [
        {
            title: "Flashcard 1: Title and Scope",
            content: `<strong>Title:</strong> Indian Penal Code (IPC) <br><strong>Scope:</strong> Defines criminal offenses and their punishments throughout India. Initially applied to British India; continues to govern criminal law in independent India.`
        },
        {
            title: "Flashcard 2: Initial Extent of IPC",
            content: `<strong>Extent:</strong> <br><ul><li>Originally applied to British India.</li><li>After independence, became the criminal law of the Republic of India.</li><li>Did not apply to Jammu and Kashmir initially due to Article 370.</li></ul>`
        },
        {
            title: "Flashcard 3: Post-2019 Extension",
            content: `<strong>Extension to Jammu & Kashmir (2019):</strong> <br><ul><li>After the abrogation of Article 370, IPC extended to Jammu & Kashmir and Ladakh.</li><li>Ensures uniform criminal laws and punishments across India.</li></ul><strong>Example:</strong> Crimes committed in J&K are now prosecuted under the IPC like in any other state.`
        },
        {
            title: "Flashcard 4: Importance of Section 1",
            content: `<strong>Why Section 1 is Important:</strong> <br><ul><li>Ensures uniform criminal laws across all Indian states and union territories.</li><li>Criminal offenses and punishments are now the same nationwide, including J&K.</li></ul>`
        },
        {
            title: "Flashcard 5: Historical Context",
            content: `<strong>Historical Background:</strong> <br><ul><li>Drafted in 1860 by Lord Thomas Babington Macaulay.</li><li>Originally excluded Jammu & Kashmir, which followed the Ranbir Penal Code.</li><li>Post-2019: Legal uniformity achieved by extending IPC to J&K.</li></ul>`
        }
    ];

    const section2Flashcards = [
        {
            title: "Flashcard 1: Section 2 Overview",
            content: `<strong>Title:</strong> Section 2 - Territorial Jurisdiction <br><strong>Summary:</strong> <br><ul><li>Section 2 establishes that any person, regardless of nationality, committing an offense within Indian territory, is subject to Indian law.</li><li>It ensures that both Indian citizens and foreigners are liable under the IPC for offenses committed on Indian soil.</li></ul><strong>Key Points to Remember:</strong> <br><ul><li>Universal Applicability: Every person committing a crime in India falls under IPC jurisdiction.</li><li>No exemptions based on nationality.</li></ul>`
        },
        {
            title: "Flashcard 2: Historical Context",
            content: `<strong>History:</strong> <br><ul><li>The IPC was drafted by Lord Macaulay in 1860 and enacted in 1862.</li><li>It unified the criminal justice system, which was fragmented before.</li><li>Section 2 emphasizes the uniform application of law to all individuals within Indian territory.</li></ul><strong>Key Points:</strong> <br><ul><li>Inspired by the Napoleonic Code and English law.</li><li>Brought consistency to India’s criminal law system.</li></ul>`
        },
        {
            title: "Flashcard 3: Territorial Jurisdiction",
            content: `<strong>Jurisdiction:</strong> <br><ul><li>Section 2 applies to the entire Indian territory, including airspace, land, territorial waters, and Indian-registered ships or aircraft.</li><li>Crimes on Indian vessels or aircraft anywhere in the world are subject to the IPC.</li></ul><strong>Key Points:</strong> <br><ul><li>Territorial extent includes airspace and waters.</li><li>Crimes on Indian ships or aircraft are covered.</li></ul>`
        },
        {
            title: "Flashcard 4: Relevant Case Laws",
            content: `<strong>Important Cases:</strong> <br><ol><li><em>Abu Salem Extradition:</em> Gangster involved in the 1993 Mumbai blasts, extradited from Portugal, charged under IPC for crimes committed in India.</li><li><em>David Headley Case:</em> American national involved in the 2008 Mumbai attacks, prosecuted under IPC despite foreign nationality.</li><li><em>Italian Marines Case:</em> Two Italian marines accused of killing Indian fishermen in Indian territorial waters, charged under IPC.</li></ol><strong>Key Points:</strong> <br><ul><li>Section 2 ensures foreign nationals can be prosecuted for crimes committed within Indian boundaries.</li></ul>`
        },
        {
            title: "Flashcard 5: Legal Implications",
            content: `<strong>Importance:</strong> <br><ul><li>Section 2 ensures no one can escape criminal liability for offenses within Indian borders, irrespective of nationality.</li><li>Facilitates international cooperation through extradition treaties.</li></ul><strong>Key Points:</strong> <br><ul><li>Ensures legal integrity for cross-border crimes.</li><li>Supports prosecution of foreign nationals involved in crimes in India.</li></ul>`
        }
    ];


// Data for Section 3 flashcards
const section3Flashcards = [
    {
        title: "Flashcard 1: Section 3 Overview",
        content: `<strong>Title:</strong> Section 3 - Punishment of Offenses Committed Beyond India <br><strong>Summary:</strong> <br><ul><li>Section 3 allows for punishment of offenses committed outside India but that can be tried within Indian jurisdiction.</li><li>This ensures that Indian law applies to crimes committed abroad by Indian citizens.</li></ul><strong>Key Points to Remember:</strong> <br><ul><li>Applies to crimes committed outside of India.</li><li>Provides jurisdiction over offenses affecting Indian interests abroad.</li></ul>`
    },
    {
        title: "Flashcard 2: Historical Context",
        content: `<strong>History:</strong> <br><ul><li>Section 3 was enacted to cover crimes committed by Indian nationals beyond Indian territory, ensuring justice extends beyond borders.</li><li>It reflects India's growing influence in international law enforcement.</li></ul><strong>Key Points:</strong> <br><ul><li>Ensures no safe haven for offenders outside India.</li><li>Strengthens India's ability to prosecute international crimes.</li></ul>`
    },
    {
        title: "Flashcard 3: Extra-Territorial Jurisdiction",
        content: `<strong>Jurisdiction:</strong> <br><ul><li>Section 3 applies to Indian nationals or foreigners committing crimes outside India that affect Indian citizens or property.</li><li>It extends jurisdiction to offenses on Indian ships or aircraft in foreign territories.</li></ul><strong>Key Points:</strong> <br><ul><li>Extends Indian law to international cases involving Indian interests.</li></ul>`
    },
    {
        title: "Flashcard 4: Relevant Case Laws",
        content: `<strong>Important Cases:</strong> <br><ol><li><em>Abu Salem Extradition:</em> Extradited from Portugal for crimes linked to the 1993 Mumbai blasts under Section 3.</li><li><em>David Headley Case:</em> Foreign national involved in the 2008 Mumbai attacks, triable under Indian law for planning and aiding the crime.</li><li><em>Italian Marines Case:</em> Charged under IPC for killing Indian fishermen in international waters.</li></ol><strong>Key Points:</strong> <br><ul><li>Ensures prosecution of foreign nationals for crimes affecting Indian interests.</li></ul>`
    },
    {
        title: "Flashcard 5: Legal Implications",
        content: `<strong>Importance:</strong> <br><ul><li>Section 3 ensures that crimes committed outside India by Indian citizens are not immune to prosecution.</li><li>It aids in the extradition and trial of international criminals in India.</li></ul><strong>Key Points:</strong> <br><ul><li>Essential for addressing transnational crimes.</li><li>Supports extradition processes and trials in India.</li></ul>`
    }
];

// Data for Section 4 flashcards
const section4Flashcards = [
    {
        title: "Flashcard 1: Section 4 Overview",
        content: `<strong>Title:</strong> Section 4 - Extension of Code to Extra-Territorial Offenses <br><strong>Summary:</strong> <br><ul><li>Section 4 extends the IPC's jurisdiction to offenses committed by Indian citizens outside India if they affect Indian interests.</li><li>It includes crimes committed on Indian ships and aircraft in foreign territories.</li></ul><strong>Key Points to Remember:</strong> <br><ul><li>Applies to offenses affecting Indian interests abroad.</li><li>Extends to crimes on Indian ships and aircraft.</li></ul>`
    },
    {
        title: "Flashcard 2: Historical Context",
        content: `<strong>History:</strong> <br><ul><li>Enacted to address the need for extending Indian jurisdiction over its citizens and property abroad.</li><li>Reflects India's efforts to ensure protection of its nationals and interests globally.</li></ul><strong>Key Points:</strong> <br><ul><li>Part of a broader legal framework to address international crimes.</li><li>Strengthens legal ties between India and international jurisdictions.</li></ul>`
    },
    {
        title: "Flashcard 3: Extra-Territorial Jurisdiction",
        content: `<strong>Jurisdiction:</strong> <br><ul><li>Section 4 allows for the prosecution of Indian nationals for crimes committed abroad if the crimes impact Indian interests.</li><li>It covers offenses occurring on Indian vessels or aircraft anywhere in the world.</li></ul><strong>Key Points:</strong> <br><ul><li>Provides for jurisdiction over international crimes involving Indian interests.</li></ul>`
    },
    {
        title: "Flashcard 4: Relevant Case Laws",
        content: `<strong>Important Cases:</strong> <br><ol><li><em>Air India Flight 182 Bombing:</em> Prosecution of individuals involved in the bombing of an Indian aircraft in international airspace.</li><li><em>Indian ship hijacking cases:</em> Prosecution of hijackers of Indian-registered ships in international waters.</li></ol><strong>Key Points:</strong> <br><ul><li>Ensures jurisdiction over crimes involving Indian assets and citizens abroad.</li></ul>`
    },
    {
        title: "Flashcard 5: Legal Implications",
        content: `<strong>Importance:</strong> <br><ul><li>Section 4 ensures that Indian law extends beyond its borders for crimes involving Indian interests.</li><li>Facilitates the protection and prosecution of crimes affecting Indian property and nationals abroad.</li></ul><strong>Key Points:</strong> <br><ul><li>Addresses gaps in international legal protections.</li><li>Strengthens India's legal reach and enforcement capabilities.</li></ul>`
    }
];

// Data for Section 5 flashcards
const section5Flashcards = [
    {
        title: "Flashcard 1: Section 5 Overview",
        content: `<strong>Title:</strong> Section 5 - Certain Laws Not to Be Affected by This Act <br><strong>Summary:</strong> <br><ul><li>Section 5 clarifies that certain laws existing at the time of the IPC’s enactment are not affected by the IPC.</li><li>It ensures that pre-existing laws not covered by the IPC remain valid and enforceable.</li></ul><strong>Key Points to Remember:</strong> <br><ul><li>Pre-existing laws continue to be applicable.</li><li>IPC does not override all existing legislation.</li></ul>`
    },
    {
        title: "Flashcard 2: Historical Context",
        content: `<strong>History:</strong> <br><ul><li>Section 5 was included to ensure a smooth transition from previous legal frameworks to the IPC.</li><li>It preserves the validity of laws that were in force before the IPC was enacted.</li></ul><strong>Key Points:</strong> <br><ul><li>Ensures continuity of legal provisions not covered by the IPC.</li><li>Facilitates the integration of IPC into the existing legal system.</li></ul>`
    },
    {
        title: "Flashcard 3: Legal Continuity",
        content: `<strong>Legal Continuity:</strong> <br><ul><li>Section 5 ensures that laws not specifically covered by the IPC remain unaffected.</li><li>IPC operates in conjunction with other laws rather than replacing them entirely.</li></ul><strong>Key Points:</strong> <br><ul><li>Preserves the integrity of pre-existing laws.</li><li>IPC complements rather than replaces other legal provisions.</li></ul>`
    },
    {
        title: "Flashcard 4: Relevant Case Laws",
        content: `<strong>Important Cases:</strong> <br><ol><li><em>Sundar Lal v. State of Madhya Pradesh:</em> Case where Section 5 was cited to argue that certain local laws continued to apply alongside IPC provisions.</li><li><em>A.R. Antulay v. R.S. Nayak:</em> Case discussing the application of IPC in conjunction with other legal provisions.</li><li><em>Nathu Lal v. State of Madhya Pradesh:</em> Case emphasizing the continuity of certain laws despite IPC's enactment.</li></ol><strong>Key Points:</strong> <br><ul><li>Demonstrates IPC’s relationship with pre-existing laws.</li></ul>`
    },
    {
        title: "Flashcard 5: Legal Implications",
        content: `<strong>Importance:</strong> <br><ul><li>Section 5 maintains the applicability of existing laws while integrating the IPC into the legal system.</li><li>It ensures that IPC complements rather than overrides other legal provisions.</li></ul><strong>Key Points:</strong> <br><ul><li>Ensures comprehensive legal coverage.</li><li>Supports legal consistency and continuity.</li></ul>`
    }
];


    // Initialize flashcards for sections
    initializeFlashcards('section-1', section1Flashcards);
    initializeFlashcards('section-2', section2Flashcards);
    initializeFlashcards('section-3', section3Flashcards);
    initializeFlashcards('section-4', section4Flashcards);
    initializeFlashcards('section-5', section5Flashcards);
});

// Get all "Watch Video" buttons
const watchVideoButtons = document.querySelectorAll('.watch-video-btn');

// Loop through each button and add a click event listener
watchVideoButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const videoId = this.getAttribute('data-video-id');  // Get the YouTube video ID
        const videoModal = document.getElementById('video-modal');
        const youtubeVideo = document.getElementById('youtube-video');
        
        // Set the src for the iframe with the correct video ID
        youtubeVideo.src = 'https://www.youtube.com/embed/' + videoId;
        
        // Display the modal
        videoModal.style.display = 'flex';
    });
});

// Close modal when the close button is clicked
document.getElementById('close-video-modal').addEventListener('click', function() {
    const videoModal = document.getElementById('video-modal');
    const youtubeVideo = document.getElementById('youtube-video');
    
    youtubeVideo.src = '';  // Clear the iframe src to stop the video
    videoModal.style.display = 'none';  // Hide the modal
});



document.addEventListener("DOMContentLoaded", function() {
    const trickImages = {
        '1': 'afterlogin/img/sec1-5.png', // Replace with actual image paths

    };

    function showTrickImage(sectionNumber) {
        const trickImageContainer = document.getElementById('trick-image-container');
        const trickImage = document.getElementById('trick-image');
        const trickImageTitle = document.getElementById('trick-image-title');

        // Set the image and title dynamically based on section
        trickImage.src = trickImages[sectionNumber];
        trickImageTitle.textContent = `Trick for Section 1-5`;
        
        // Show the flashcard container
        trickImageContainer.style.display = 'block';
    }

    // Set up event listeners for buttons
    document.getElementById('btn-section-1').addEventListener('click', function() {
        showTrickImage('1');
    });
   

    // Close the image overlay
    document.getElementById('close-btn-trick-image').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('trick-image-container').style.display = 'none';
    });
});