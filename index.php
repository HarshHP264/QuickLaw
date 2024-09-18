<?php include("afterlogin/headerr.php"); ?> 


    <header> 
        <section class="searchBar"> 
        <h3 style="text-align: left;" >Select Law Category and Search Sections</h3>
                <div style="width: 107%; height: 50px; background-color: #4CAF50; display: flex; align-items: center; justify-content: space-around; margin-bottom: 10px; " >
                    <strong> <input type="radio" value="crim" name="sec_catgry" checked > Criminal </strong>
                    <strong> <input type="radio" value="faml" name="sec_catgry" > Family </strong>
                    <strong> <input type="radio" value="civil" name="sec_catgry" > Civil </strong>
                </div>
                    <input type="text" id="searchBar" placeholder="Search IPC Sections..." >
                    <button onclick="searchSections()" style="margin-top: 10px;" >Search</button>
                    <ul id="searchResults"></ul> <!-- Search results will be displayed here -->
                </section>
        <div class="navbar">
            <nav>
                <div class="flex">
                    <h1 class="text-background">IPC Sections - Indian Constitution</h1>
                    <div>
                        <h2 class="text-background">
                            Lets Learn Constitution in Simpler Way
                        </h2>
                    </div>
                </div>
            </nav>
        </div>
    </header>



    <section class="section-grid-1">
        <div class="card criminal-law">
            <h2>Criminal Law</h2>
            <p>Governs offenses, their definitions, and punishments under the Indian Penal Code.</p>
            <button id="criminal-learn-more" >Learn More</button>
        </div>

        <div class="card family-law">
            <h2>Family Law</h2>
            <p>Addresses legal issues related to marriage, divorce, child custody, and family relationships under the
                IPC.</p>
            <button id="family-learn-more" >Learn More</button>
        </div>

        <div class="card civil-law">
            <h2>Civil Law</h2>
            <p>Governs disputes related to property, contracts, and personal rights under the IPC.</p>
            <button id="civil-learn-more" >Learn More</button>
        </div>


        <script src="script.js"></script>
    </section>
    
    <?php include("afterlogin/footer.php"); ?>
</body>
</html>