class FirstLetterAvatar {
    constructor(config) {
        this.userAvatar = document.querySelectorAll(config.avatarsSelector);
        this.userName = document.querySelectorAll(config.namesSelector);
        this.backgroundColor = config.backgroundColor || "#151515";
        this.letterColor = config.letterColor || "#ffffff";
        this.fontSize = config.fontSize || "1.5rem";
        this.isCircle = config.isCircle || false;
        this.isBold = config.isBold || false;
    }
    renderAvatar() {
        const isSameLength = this.userAvatar.length === this.userName.length;
        // List of Flat UI Colors
        const listOfColors = [
            "#1abc9c", "#16a085", "#f1c40f", "#f39c12", 
            "#2ecc71", "#27ae60", "#e67e22", "#d35400", 
            "#3498db", "#2980b9", "#e74c3c", "#c0392b", 
            "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", 
            "#95a5a6", "#7f8c8d"
        ];
        if (this.userAvatar && this.userName && isSameLength) {
            let firstLetter, newSpan, randomColor;
            for (let i = 0; i < this.userAvatar.length; i++) {
                // take first letter from userName
                firstLetter = this.userName[i]
                    .textContent
                    .trim()
                    .toUpperCase()[0];

                // create an element inside the userAvatar and add a letter there
                newSpan = document.createElement("span");
                newSpan.textContent = firstLetter;
                this.userAvatar[i].append(newSpan);

                // apply styles to elements
                if (this.backgroundColor === "random") {
                    randomColor = Math.round(
                        0 + Math.random() * (listOfColors.length - 1 - 0)
                    );
                    this.userAvatar[i].style.backgroundColor =
                        listOfColors[randomColor];
                } else {
                    this.userAvatar[i].style.backgroundColor =
                        this.backgroundColor;
                }

                if (this.isBold) {
                    newSpan.style.fontWeight = "bold";
                }

                if (this.isCircle) {
                    this.userAvatar[i].style.borderRadius = "50%";
                }

                newSpan.style.fontSize = this.fontSize;
                newSpan.style.color = this.letterColor;
            }
        }
    }
}

module.exports.FirstLetterAvatar = FirstLetterAvatar;
