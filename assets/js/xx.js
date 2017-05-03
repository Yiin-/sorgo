var slider = {
    width: 970,
    height: 250,
    columnCount: 10,
    columnRotateDelay: 100,
    autoPlayDelay: 3,
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
            mainColumn.style.transform = 'translateZ(0px) rotateY(0) translateZ(0px)';
            mainColumn.style['msTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
            mainColumn.style['MozTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
            mainColumn.style['WebkitTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
            mainColumn.style['OTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
            bannerHolder.appendChild(mainColumn);


            var secondaryColumn = document.createElement("div");
            secondaryColumn.className = 'sliderSecondaryColumn';
            secondaryColumn.style.left = currentColumnOffset + 'px';
            secondaryColumn.style.height = slider.height + 'px';
            secondaryColumn.style.width = columnWidth + 'px';
            secondaryColumn.style.backgroundImage = 'url(' + slider.content[1].src + ')';
            secondaryColumn.style.backgroundSize = slider.width + 'px ' + slider.height + 'px';
            secondaryColumn.style.backgroundPosition = '-' + currentColumnOffset + 'px 0px';
            secondaryColumn.style.transform = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
            secondaryColumn.style['msTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
            secondaryColumn.style['MozTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
            secondaryColumn.style['WebkitTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
            secondaryColumn.style['OTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';

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
        }, 3000);


        function myLoop() {
            setTimeout(function () {

                if (mainColumn[i].style.transform == 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)') {
                    mainColumn[i].style.transform = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    mainColumn[i].style['msTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    mainColumn[i].style['MozTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    mainColumn[i].style['WebkitTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    mainColumn[i].style['OTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';

                    secondaryColumn[i].style.transform = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    secondaryColumn[i].style.transform = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    secondaryColumn[i].style['msTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    secondaryColumn[i].style['MozTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    secondaryColumn[i].style['WebkitTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    secondaryColumn[i].style['OTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                }
                else {
                    mainColumn[i].style.transform = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    mainColumn[i].style['msTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    mainColumn[i].style['MozTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    mainColumn[i].style['WebkitTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';
                    mainColumn[i].style['OTransform'] = 'translateZ(0px) rotateY(3.14159rad) translateZ(0px)';

                    secondaryColumn[i].style.transform = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    secondaryColumn[i].style.transform = 'translateZ(0px) rotateY0) translateZ(0px)';
                    secondaryColumn[i].style['msTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    secondaryColumn[i].style['MozTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    secondaryColumn[i].style['WebkitTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
                    secondaryColumn[i].style['OTransform'] = 'translateZ(0px) rotateY(0) translateZ(0px)';
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


    },
};

slider.draw();
slider.startAnimation();/**
 * Created by sorgo on 17/05/03.
 */
