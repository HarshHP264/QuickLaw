<?php
    $section = $_GET['sec'];
    $which = $_GET['which'];
    session_start();
    if(isset($_SESSION['userid'])) {
        $idd = $_SESSION['userid'];
    } else{
        $idd ='false';
    }
    
?>


<?php 
        include("afterlogin/headerr.php");
   ?>

    <section class="section-grid-2">
        <div class="card criminal-law">
            <h2>Criminal Law - IPC Sections </h2>
            <p>Explore the various sections of Criminal Law under the Indian Penal Code.</p>

            <div class="collapsible-content">
                <!-- Section 1 Flashcards -->
                <div class="section" id="section-1">
                    <h3>Section 1</h3>
                    <p>Title and Extent of Operation of the Code</p>
                    <div class="buttons">
                        <a href="https://criminal-law-section.blogspot.com/2024/09/section-1-title-and-extent-of-operation.html"
                            class="button" target="_blank">Learn More</a>
                        <a href="#" id="flashcard-btn-section-1" class="button test-quiz-btn">Flashcard</a>
                        <a href="#" class="watch-video-btn" data-video-id="OpCWkpBy7SY?si=dE0DEjGrC6UpdFkO" > Watch Video</a>
                    </div>
                    <!-- Empty container for flashcards -->
                    <div id="flashcard-container-section-1" class="flashcard-container"></div>

                </div>
                <!-- YouTube Video Modal -->
                <div id="video-modal" class="video-modal">
                    <div class="video-modal-content">
                        <span class="cross-btn" id="close-video-modal">&times;</span>
                        <iframe id="youtube-video" width="560" height="315" src="" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>

                <!-- Section 2 Flashcards -->
                <div class="section" id="section-2">
                    <h3>Section 2</h3>
                    <p>Punishment of Offenses Committed Within India</p>
                    <div class="buttons">
                        <a href="https://criminal-law-section.blogspot.com/2024/09/section-2-title-and-extent-of-operation.html"
                            class="button">Learn More</a>
                        <a href="#" id="flashcard-btn-section-2" class="button test-quiz-btn">Flashcard</a>
                        <a href="#" data-video-id="KjHPKzAOv3U?si=eVvbKuyugTD9kVKe" class="watch-video-btn"> Watch Video</a>
                    </div>
                    <!-- Empty container for flashcards -->
                    <div id="flashcard-container-section-2" class="flashcard-container"></div>
                </div>
                <!-- Section 3 Flashcards -->
                <div class="section" id="section-3">
                    <h3>Section 3</h3>
                    <p>Punishment of Offenses Committed Beyond India but Triable Within India</p>
                    <div class="buttons">
                        <a href="https://criminal-law-section.blogspot.com/2024/09/section-3-punishment-of-offenses.html"
                            class="button">Learn More</a>
                        <a href="#" id="flashcard-btn-section-3" class="button test-quiz-btn">Flashcard</a>
                        <a href="#" id="watch-video-btn" class="watch-video-btn"> Watch Video</a>
                    </div>
                    <!-- Empty container for flashcards -->
                    <div id="flashcard-container-section-3" class="flashcard-container"></div>
                </div>


                <!-- Section 4 Flashcards (with updated content) -->
                <div class="section" id="section-4">
                    <h3>Section 4</h3>
                    <p>Extension of Code to Extra-Territorial Offenses</p>
                    <div class="buttons">
                        <a href="https://criminal-law-section.blogspot.com/2024/09/section-4-extension-of-code-to-extra.html"
                            class="button">Learn More</a>
                        <a href="#" id="flashcard-btn-section-4" class="button test-quiz-btn">Flashcard</a>
                        <a href="#" id="watch-video-btn" class="watch-video-btn"> Watch Video</a>
                    </div>
                    <!-- Empty container for flashcards -->
                    <div id="flashcard-container-section-4" class="flashcard-container"></div>
                </div>


                <!-- Section 5 Flashcards -->
                <div class="section" id="section-5">
                    <h3>Section 5</h3>
                    <p>Certain Laws Not to Be Affected by This Act</p>
                    <div class="buttons">
                        <a href="https://criminal-law-section.blogspot.com/2024/09/section-5-certain-laws-not-to-be.html"
                            class="button">Learn More</a>
                        <a href="#" id="flashcard-btn-section-5" class="button test-quiz-btn">Flashcard</a>
                        <a href="#"  class="watch-video-btn" data-video-id="dPAEFlm-GpM?si=cl2SPwR_MqVbpHyy"> Watch Video</a>
                    </div>
                    <!-- Empty container for flashcards -->
                    <div id="flashcard-container-section-5" class="flashcard-container"></div>
                </div>

            </div>
        </div>
        <div class="card">
            <!-- Quizzes -->
            <div class="card quizzes">
                <h2>Criminal Law Quizzes</h2>
                <p>Test your knowledge of Criminal Law IPC Sections with quizzes covering all sections.</p>

                <div class="quiz-options">
                        <button type="submit" class="button" onclick="rdrt('<?php echo $which; ?>', 'basic', '<?php echo $section; ?>', '<?php echo $idd; ?>')"> Basic </button>
                        <button type="submit"  class="button" onclick="rdrt('<?php echo $which; ?>', 'intermediate', '<?php echo $section; ?>', '<?php echo $idd; ?>')" > Intermediate </button>
                        <button type="submit"  class="button" onclick="rdrt('<?php echo $which; ?>', 'advanced', '<?php echo $section; ?>', '<?php echo $idd; ?>')" > Advanced </button>   
                </div>
                <script>
                        function rdrt(whic, type, sec, idd) {
                            const url = 'afterlogin/quiz.php?which='+whic+'&sec='+sec+'&type='+type+'&userid='+idd;
                            window.location.href = url;
                        }
                </script>
            </div>
            <div class="card quizzes">
                <h2>Real-Life Problems on Sections 1-5</h2>
                <p>Apply your knowledge of IPC Sections 1-5 to solve real-world scenarios and situations.</p>

                <div class="quiz-options">
                    <button type="submit" class="button" onclick="rdrt('<?php echo $which; ?>', 'real-life', '<?php echo $section; ?>', '<?php echo $idd; ?>')"> Let's Take It </button>
                </div>
            </div>
            <div class="quizzes card tricks-section">
            <h2>Learn IPC Sections 1-5 with Tricks</h2>
            <p>Click on any section below to view the trick image.</p>

            <!-- Flashcard-style overlay for trick images -->
            <!-- Buttons for Section Tricks -->
            <div class="trick-buttons">
                <button id="btn-section-1">Section 1 - 5 Trick</button>
            </div>



            <!-- Flashcard-style overlay for trick images -->
            <div id="trick-image-container" class="flashcard-container" style="display:none;">
                <div class="flashcard-slider">
                    <div class="flashcard">
                        <div class="flashcard-content">
                            <h3 id="trick-image-title">Trick for Section</h3>
                            <img id="trick-image" src="" alt="Trick Image" style="max-width:100%; height:auto;">
                        </div>
                    </div>
                </div>
                <div class="flashcard-controls">
                    <a href="#" id="close-btn-trick-image" class="control-btn close-btn top-close"
                        style="background-color: red">
                        <img src="afterlogin/img/cross.svg" alt="Close" class="close-icon"
                            style="background-color: red">
                    </a>
                </div>
            </div>

        </div>
        </div>

    </section>
    <script>
        document.addEventListener("DOMContentLoaded", function () {

            // Flashcard Toggle Function for Section 4
            const flashcardBtnSection4 = document.getElementById('flashcard-btn-section-4');
            const flashcardContainerSection4 = document.getElementById('flashcard-container-section-4');
            flashcardBtnSection4.addEventListener('click', function () {
                flashcardContainerSection4.style.display = 'block';
            });

            const closeBtnSection4 = document.getElementById('close-btn-section-4');
            closeBtnSection4.addEventListener('click', function () {
                flashcardContainerSection4.style.display = 'none';
            });

            const prevBtnSection4 = document.getElementById('prev-btn-section-4');
            const nextBtnSection4 = document.getElementById('next-btn-section-4');
            const flashcardsSection4 = document.querySelectorAll('#flashcard-container-section-4 .flashcard');
            let currentFlashcardSection4 = 0;

            nextBtnSection4.addEventListener('click', function () {
                flashcardsSection4[currentFlashcardSection4].style.display = 'none';
                currentFlashcardSection4 = (currentFlashcardSection4 + 1) % flashcardsSection4.length;
                flashcardsSection4[currentFlashcardSection4].style.display = 'block';
            });

            prevBtnSection4.addEventListener('click', function () {
                flashcardsSection4[currentFlashcardSection4].style.display = 'none';
                currentFlashcardSection4 = (currentFlashcardSection4 - 1 + flashcardsSection4.length) % flashcardsSection4.length;
                flashcardsSection4[currentFlashcardSection4].style.display = 'block';
            });
        });

    </script>
    
    <script src="script.js"></script>
    <?php include("afterlogin/footer.php"); ?>
</body>

</html>