Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById( 'camera' );

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_N8yIbrUt/model.json',modelLoaded);

function modelLoaded() {
    console.log('ModelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata_1 = "The first predinction is " + prediction_1;
    speakdata_2 = "And the secong prediction is " + predintion_2;
    var utterThis = new SpeechSynthesisUtterance(speakdata_1 + speankdata_2);
    synth.speak(utterThis);
}