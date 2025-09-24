function Gallery ()  {
    const images = [  
        "https://media.gq.com.mx/photos/67c606818b74f8e79bc487ac/master/w_1600,c_limit/Ferrari.jpg",  
        "https://media.gq.com.mx/photos/67c60682919293616f46291c/master/w_1600,c_limit/Mercedes%20W16.jpg",  
        "https://media.gq.com.mx/photos/67c60683e1319aab4c54dff9/master/w_1600,c_limit/Alpine.jpg"  
    ];  


    return (  
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "150px", height: "150px" }} />  
            ))}  
        </section>  
    );

}
export default Gallery;
