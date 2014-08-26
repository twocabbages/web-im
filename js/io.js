/**
 * Created by air on 14-8-21.
 */
function handleFileSelect(f, onload, isTypedArray) {

    // Loop through the FileList and render image files as thumbnails.
    var reader = new FileReader();


    reader.onload = onload ? onload : function(){};

    // Read the file as an ArrayBuffer
    if (!!isTypedArray) {
        reader.readAsArrayBuffer(f);
        return;
    }

    // Read the file as a Binary String
    reader.readAsBinaryString(f);
}