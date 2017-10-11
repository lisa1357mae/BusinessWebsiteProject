let monday = document.querySelector(".monday"),
	tuesday = document.querySelector(".tuesday"),
	wednesday = document.querySelector(".wednesday"),
	thursday = document.querySelector(".thursday"),
	friday = document.querySelector(".friday"),
	saturday = document.querySelector(".saturday"),
	sunday = document.querySelector(".sunday"),
	classInfo = document.querySelector(".classInfo"),
	modal = document.querySelector("#modal"),
	classImg = document.querySelector(".classImg");


monday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "Mommy & Baby yoga classes offer a safe and fun space for women to navigate through the exciting yet challenging postpartum phase. Classes focus on rebuilding strength in the abdomen, back and pelvic muscles; and releasing tension in shoulders, neck and chest. Bond with your baby through infant massage and gentle stretching that keep them engaged and smiling. These classes offer a safe space where mothers can share questions, milestones and challenges that might arise during this time.";
})

tuesday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "A fitness-based approach to Vinyasa style flow. Students will focus on linking conscious breath with a vigorous and mindful flow. In a power yoga class, students will build strength, flexibility and concentration while cleansing the body and calming the mind. You can expect a great cardiovascular and strength building workout combined with breath work. Bring a towel and water!  All levels are welcome (unless otherwise noted), but some yoga experience is suggested. approx class temp: ~85-92+ degrees.";
})

wednesday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "A practice for your body & mind with 40 minutes of yoga and 20 minutes of meditation. "Meditation" and "mindfulness" are buzzwords these days for good reason. Yogis have been practicing dhyana (meditation) for millennia. Get expert insight here on meditation and its symbiotic relationship to yoga. Quiet your mind and make meditation part of your modern daily life.";
})

thursday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "Created by a NYC ballet dancer and exclusively at Pure, Figure 4 is the most challenging barre experience out there, enhancing precision dance techniques with strength training. With high-energy choreography and interval cardio, Figure 4 keeps your pulse pounding while forging a lean, sculpted physique focusing on the thighs, arms, abs, and glutes. Socks with grips or bare feet for class.";
})

friday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "Ever wonder where Vinyasa Flow originated from?  This class is a traditional approach to the Vinyasa yoga style, which dates back to as early as 1930.  Like a Vinyasa class, each movement is synchronized with breath.  Expect this class to include traditional asana (poses) and sequences: sun salutations, standing poses, seated poses, backbends and an opportunity to learn/practice inversions.  Great class for anyone who is interested in learning more about Ashtanga Vinyasa.  Open to all experience levels (even beginners!) and individual modifications will be available.  Time for Q&A following class for assistance with postures and other inquires will be available as well.";
})

saturday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "An iyengar inspired introduction to the fundamentals of yoga with an explanation of the postures combined with correct breathing techniques. Class is conducted at a more relaxed pace where students are encouraged to ask questions. Ideal for first timers.";
})

sunday.addEventListener("click", function() {
	modal.style.display = "block";
	classImg.src = "http://cdn2.momjunction.com/wp-content/uploads/2015/03/Postnatal-Exercises-For-New-Moms.jpg";
	classInfo.innerHTML = "We believe in making yoga accessible to all by offering consciously affordable classes often.  Weekly Community Flow classes (classes at a discounted rate), are open to anyone and we welcome students of all ages, ability, and experience.  We also participate in worthy charities and organizations and frequently offer cause-related donation based classes as well.";
})

document.getElementById("close").addEventListener("click", function () {
		modal.style.display = "none";
	});