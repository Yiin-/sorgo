var slider = {
    width: 970,
    height: 250,
    columnCount: 10,
    columnRotateDelay: 100,
    autoPlayDelay: 3000,
    content: [
        {src: "assets/img/img0.jpg"},
        {src: "assets/img/img1.jpg"},
        {src: "assets/img/Panel_3.png"},

    ],
    draw: function () {
        var columnWidth = slider.width / slider.columnCount,
            currentColumnOffset = 0,
            bannerHolder = document.getElementById("banner");
        for (i = 0; i < slider.columnCount; i++) {

            var mainColumn = document.createElement("div");
            mainColumn.className = 'sliderMainColumn';
            mainColumn.style.left = currentColumnOffset + 'px';
            mainColumn.style.height = slider.height + 'px';
            mainColumn.style.width = columnWidth + 'px';
            mainColumn.style.backgroundImage = 'url(' + slider.content[0].src + ')';
            mainColumn.style.backgroundSize = slider.width + 'px ' + slider.height + 'px';
            mainColumn.style.backgroundPosition = '-' + currentColumnOffset + 'px 0px';
            mainColumn.setAttribute('data-image-index', '0');
            bannerHolder.appendChild(mainColumn);


            var secondaryColumn = document.createElement("div");
            secondaryColumn.className = 'sliderSecondaryColumn';
            secondaryColumn.style.left = currentColumnOffset + 'px';
            secondaryColumn.style.height = slider.height + 'px';
            secondaryColumn.style.width = columnWidth + 'px';
            secondaryColumn.style.backgroundImage = 'url(' + slider.content[1].src + ')';
            secondaryColumn.style.backgroundSize = slider.width + 'px ' + slider.height + 'px';
            secondaryColumn.style.backgroundPosition = '-' + currentColumnOffset + 'px 0px';
            secondaryColumn.setAttribute('data-image-index', '1');
            bannerHolder.appendChild(secondaryColumn);

            currentColumnOffset = currentColumnOffset + columnWidth;
        }

    },
    startAnimation: function () {
        var i = 0;
        var mainColumn = document.getElementsByClassName("sliderMainColumn"),
            secondaryColumn = document.getElementsByClassName("sliderSecondaryColumn");
        setInterval(function () {
            myLoop();
        }, slider.autoPlayDelay);


        function myLoop() {
            setTimeout(function () {
                if (mainColumn[i].className == 'sliderMainColumn transformUp') {
                    mainColumn[i].className = 'sliderMainColumn';
                    secondaryColumn[i].className = 'sliderSecondaryColumn';
                    changeImage(secondaryColumn[i]);
                }
                else {
                    mainColumn[i].className += ' transformUp';
                    secondaryColumn[i].className += ' transformDown';
                    changeImage(mainColumn[i]);
                }
                i++;
                if (i < mainColumn.length) {
                    myLoop();
                }
                else {
                    i = 0;
                }
            }, slider.columnRotateDelay)
        }

        function changeImage(element) {
            var imageIndex = element.getAttribute('data-image-index');
            if ((parseFloat(imageIndex) + 1) >= slider.content.length) {

                element.style.backgroundImage = 'url(' + slider.content[0].src + ')';
                element.setAttribute('data-image-index', '0');

            }
            else {

                element.style.backgroundImage = 'url(' + slider.content[parseFloat(imageIndex) + 1].src + ')';
                element.setAttribute('data-image-index', parseFloat(imageIndex) + 1);

            }
        }
    },
};

slider.draw();
slider.startAnimation();