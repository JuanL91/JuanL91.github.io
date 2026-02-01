# JuanL91.github.io 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transformador de Estilo Cubista</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(120deg, #1a237e 0%, #283593 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .subtitle {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 700px;
            margin: 0 auto 25px;
        }
        
        .cubist-decoration {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background: 
                linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.1) 55%, transparent 60%),
                linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.1) 55%, transparent 60%);
            background-size: 20px 20px;
        }
        
        .content {
            padding: 40px;
        }
        
        .instructions {
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            padding: 25px;
            border-radius: 0 8px 8px 0;
            margin: 25px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }
        
        .instructions h2 {
            color: #0d47a1;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .instructions h2:before {
            content: "🎨";
            margin-right: 10px;
            font-size: 1.4em;
        }
        
        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }
        
        .step {
            background: white;
            border: 1px solid #e0e6ed;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-top: 4px solid #4fc3f7;
        }
        
        .step:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: #1a237e;
            color: white;
            border-radius: 50%;
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 1.1rem;
            flex-shrink: 0;
        }
        
        .step h3 {
            color: #1a237e;
            margin-bottom: 12px;
            font-size: 1.4rem;
        }
        
        .app-container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            padding: 35px;
            margin: 35px 0;
            text-align: center;
            border: 1px solid #e0e6ed;
        }
        
        .upload-area {
            border: 3px dashed #4fc3f7;
            border-radius: 16px;
            padding: 40px 30px;
            margin: 25px 0;
            background: linear-gradient(135deg, #f1f8e9 0%, #e3f2fd 100%);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .upload-area:hover {
            border-color: #1a237e;
            background: linear-gradient(135deg, #e8f5e9 0%, #bbdefb 100%);
        }
        
        .upload-area.dragover {
            background: linear-gradient(135deg, #c8e6c9 0%, #90caf9 100%);
            border-color: #0288d1;
        }
        
        .upload-icon {
            font-size: 4rem;
            margin-bottom: 15px;
            color: #1a237e;
        }
        
        .upload-text {
            font-size: 1.4rem;
            font-weight: 500;
            color: #1a237e;
            margin-bottom: 8px;
        }
        
        .upload-subtext {
            color: #546e7a;
            margin-bottom: 15px;
        }
        
        .btn {
            background: linear-gradient(120deg, #1a237e 0%, #283593 100%);
            color: white;
            border: none;
            padding: 14px 32px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 15px rgba(26, 35, 126, 0.4);
            display: inline-block;
            margin: 10px;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(26, 35, 126, 0.6);
            background: linear-gradient(120deg, #0d1b4e 0%, #1a237e 100%);
        }
        
        .btn:active {
            transform: translateY(1px);
        }
        
        .btn-secondary {
            background: linear-gradient(120deg, #5d4037 0%, #795548 100%);
            box-shadow: 0 4px 15px rgba(93, 64, 55, 0.4);
        }
        
        .btn-secondary:hover {
            background: linear-gradient(120deg, #3e2723 0%, #5d4037 100%);
            box-shadow: 0 6px 20px rgba(93, 64, 55, 0.6);
        }
        
        .btn:disabled {
            background: #bdbdbd;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        .preview-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin: 30px 0;
        }
        
        .image-preview {
            flex: 1;
            min-width: 300px;
            max-width: 500px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
            padding: 15px;
            text-align: center;
            border: 1px solid #e0e6ed;
        }
        
        .preview-title {
            font-weight: 600;
            margin: 15px 0 10px;
            color: #1a237e;
            font-size: 1.3rem;
            padding-bottom: 8px;
            border-bottom: 1px solid #e0e6ed;
        }
        
        .preview-image {
            max-width: 100%;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .canvas-container {
            position: relative;
            margin: 20px auto;
            max-width: 100%;
            border: 2px solid #e0e6ed;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            background: #f8f9fa;
        }
        
        canvas {
            display: block;
            max-width: 100%;
            height: auto;
            background: white;
        }
        
        .controls {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin: 25px 0;
        }
        
        .control-group {
            text-align: center;
            min-width: 150px;
        }
        
        .control-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #1a237e;
            font-size: 0.95rem;
        }
        
        input[type="range"] {
            width: 100%;
            height: 25px;
            -webkit-appearance: none;
            background: #e0e6ed;
            border-radius: 10px;
        }
        
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #1a237e;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        
        .value-display {
            font-weight: bold;
            color: #1a237e;
            margin-top: 5px;
            font-size: 1.1rem;
        }
        
        .download-section {
            text-align: center;
            margin: 30px 0;
            padding: 25px;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
            border-radius: 16px;
            border: 1px solid #e0e6ed;
        }
        
        .example-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin: 40px 0;
        }
        
        .example-item {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 3px solid #e3f2fd;
        }
        
        .example-item:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 30px rgba(0,0,0,0.2);
            border-color: #4fc3f7;
        }
        
        .example-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
            border-bottom: 3px solid #1a237e;
        }
        
        .example-caption {
            padding: 12px;
            background: #f8f9fa;
            font-weight: 600;
            color: #1a237e;
            text-align: center;
            font-size: 0.95rem;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        footer {
            text-align: center;
            padding: 25px;
            color: #546e7a;
            font-size: 0.95rem;
            border-top: 1px solid #e0e6ed;
            margin-top: 20px;
            background: #f8f9fa;
        }
        
        .educational-note {
            background: #fff8e1;
            border-left: 4px solid #ffc107;
            padding: 15px;
            border-radius: 0 8px 8px 0;
            margin: 25px 0;
            font-style: italic;
        }
        
        @media (max-width: 768px) {
            .content {
                padding: 25px;
            }
            
            h1 {
                font-size: 2.3rem;
            }
            
            .subtitle {
                font-size: 1.1rem;
            }
            
            .steps {
                grid-template-columns: 1fr;
            }
            
            .app-container {
                padding: 25px 20px;
            }
            
            .upload-area {
                padding: 30px 20px;
            }
            
            .preview-container {
                flex-direction: column;
                align-items: center;
            }
            
            .image-preview {
                min-width: 100%;
            }
            
            .controls {
                flex-direction: column;
                align-items: center;
            }
            
            .control-group {
                width: 100%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Transformador de Estilo Cubista</h1>
            <p class="subtitle">Convierte tus imágenes en obras de arte con estilo cubista. Sube una foto, aplica el efecto y descarga tu creación inspirada en Picasso, Braque y Gris.</p>
            <div class="cubist-decoration"></div>
        </header>
        
        <div class="content">
            <div class="instructions">
                <h2>¿Qué es el Cubismo?</h2>
                <p>El cubismo fue un movimiento artístico revolucionario iniciado por Pablo Picasso y Georges Braque alrededor de 1907. Rompió con la tradición de representar objetos desde un solo punto de vista, mostrándolos fragmentados desde múltiples ángulos simultáneamente.</p>
            </div>
            
            <div class="app-container">
                <div id="upload-area" class="upload-area">
                    <div class="upload-icon">🖼️</div>
                    <div class="upload-text">Arrastra tu imagen aquí</div>
                    <div class="upload-subtext">o haz clic para buscar en tu dispositivo</div>
                    <input type="file" id="image-input" accept="image/*" style="display: none;">
                </div>
                
                <div class="controls" id="controls" style="display: none;">
                    <div class="control-group">
                        <label class="control-label">Nivel de Fragmentación</label>
                        <input type="range" id="fragmentation" min="5" max="30" value="15">
                        <div class="value-display" id="fragmentation-value">15</div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Intensidad de Color</label>
                        <input type="range" id="color-intensity" min="0" max="100" value="70">
                        <div class="value-display" id="color-intensity-value">70%</div>
                    </div>
                    <div class="control-group">
                        <label class="control-label">Estilo Cubista</label>
                        <select id="style-select" class="btn" style="background: white; color: #1a237e; padding: 8px 15px; width: 180px; margin-top: 5px; border-radius: 8px;">
                            <option value="analytic">Cubismo Analítico</option>
                            <option value="synthetic">Cubismo Sintético</option>
                        </select>
                    </div>
                </div>
                
                <div class="preview-container" id="preview-container" style="display: none;">
                    <div class="image-preview">
                        <div class="preview-title">Imagen Original</div>
                        <div class="canvas-container">
                            <canvas id="original-canvas" width="500" height="500"></canvas>
                        </div>
                    </div>
                    <div class="image-preview">
                        <div class="preview-title">Estilo Cubista</div>
                        <div class="canvas-container">
                            <canvas id="cubist-canvas" width="500" height="500"></canvas>
                        </div>
                    </div>
                </div>
                
                <div class="download-section" id="download-section" style="display: none;">
                    <h3 style="margin-bottom: 15px; color: #1a237e;">¡Tu obra de arte está lista!</h3>
                    <button id="download-btn" class="btn btn-secondary">
                        ↓ Descargar Imagen en Estilo Cubista
                    </button>
                    <div class="educational-note">
                        Nota: Esta es una interpretación digital automatizada. Para crear verdaderas obras cubistas, sigue el protocolo manual descrito a continuación.
                    </div>
                </div>
            </div>
            
            <h2 style="text-align: center; margin: 40px 0 25px; color: #1a237e;">Protocolo para Crear Arte Cubista</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>Descomposición Geométrica</h3>
                    <p>Identifica las formas principales de tu imagen y redúcelas a figuras geométricas básicas: cubos, conos, cilindros, esferas y planos triangulares.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>Fragmentación del Plano</h3>
                    <p>Divide la imagen en múltiples secciones irregulares, como si estuvieras rompiendo un espejo. Cada fragmento contendrá una parte distorsionada del sujeto original.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>Múltiples Perspectivas</h3>
                    <p>Representa al sujeto desde más de un ángulo en un mismo plano. Por ejemplo, muestra un ojo de frente y el otro de perfil; o la nariz de lado mientras la boca está de frente.</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h3>Supresión de Perspectiva</h3>
                    <p>Elimina la profundidad ilusionista (líneas de fuga, sombras realistas). Todo debe parecer aplanado o bidimensional, aunque sugiera volumen mediante líneas y planos.</p>
                </div>
                <div class="step">
                    <div class="step-number">5</div>
                    <h3>Paleta de Colores Limitada</h3>
                    <p>Usa tonos sobrios: grises, ocres, verdes oliva, marrones y negros. Evita colores brillantes o saturados si buscas emular el cubismo analítico (1908–1912).</p>
                </div>
                <div class="step">
                    <div class="step-number">6</div>
                    <h3>Reorganización Compositiva</h3>
                    <p>Distribuye los fragmentos sin un centro claro. No hay un "foco principal"; todos los planos tienen igual importancia visual.</p>
                </div>
            </div>
            
            <h2 style="text-align: center; margin: 40px 0 25px; color: #1a237e;">Obras Maestras del Cubismo</h2>
            <p style="text-align: center; margin-bottom: 25px; color: #546e7a; max-width: 700px; margin-left: auto; margin-right: auto;">
                Estudia estas obras originales para entender mejor las técnicas cubistas que puedes aplicar en tus creaciones:
            </p>
            <div class="example-gallery">
                <div class="example-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Juan_Gris%2C_Portrait_of_Picasso%2C_1912%2C_oil_on_canvas%2C_Art_Institute_of_Chicago.jpg" alt="Retrato de Picasso por Juan Gris" class="example-img">
                    <div class="example-caption">Juan Gris, Retrato de Picasso (1912)</div>
                </div>
                <div class="example-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Georges_Braque%2C_Violon_et_Bougeoir%2C_1910%2C_San_Francisco_Museum_of_Modern_Art.jpg" alt="Violín y Candelabro por Georges Braque" class="example-img">
                    <div class="example-caption">Georges Braque, Violín y Candelabro (1910)</div>
                </div>
                <div class="example-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Pablo_Picasso%2C_1911-12%2C_Ma_Jolie%2C_oil_on_canvas%2C_100_x_64.5_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg" alt="Ma Jolie por Pablo Picasso" class="example-img">
                    <div class="example-caption">Pablo Picasso, Ma Jolie (1911-12)</div>
                </div>
                <div class="example-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fernand_L%C3%A9ger%2C_1919%2C_The_City%2C_oil_on_canvas%2C_204.5_x_262_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg/800px-Fernand_L%C3%A9ger%2C_1919%2C_The_City%2C_oil_on_canvas%2C_204.5_x_262_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg" alt="La Ciudad por Fernand Léger" class="example-img">
                    <div class="example-caption">Fernand Léger, La Ciudad (1919)</div>
                </div>
            </div>
            
            <div class="instructions" style="margin-top: 40px;">
                <h2>Ejemplo Práctico: Cómo Transformar un Retrato</h2>
                <ol style="text-align: left; margin-top: 15px; padding-left: 25px; margin-bottom: 0;">
                    <li>Toma una foto de un rostro.</li>
                    <li>Dibuja líneas diagonales y curvas que lo dividan en 8–12 fragmentos irregulares.</li>
                    <li>En cada fragmento, redibuja la parte correspondiente del rostro, pero <strong>cambia su ángulo</strong>: un ojo de perfil, la frente dividida en dos planos, la boca invertida, etc.</li>
                    <li>Simplifica cada zona en formas geométricas (triángulos para mejillas, rectángulos para frente, etc.).</li>
                    <li>Pinta con grises y ocres, usando sombreado angular (no suave).</li>
                </ol>
            </div>
            
            <footer>
                <p>Transformador de Estilo Cubista &copy; 2026 | Inspirado en las técnicas de Picasso, Braque y Gris</p>
                <p style="margin-top: 8px; font-size: 0.9rem;">Herramienta educativa para estudiantes de arte. Las obras de ejemplo pertenecen a sus respectivos museos y artistas.</p>
            </footer>
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const uploadArea = document.getElementById('upload-area');
            const imageInput = document.getElementById('image-input');
            const controls = document.getElementById('controls');
            const previewContainer = document.getElementById('preview-container');
            const downloadSection = document.getElementById('download-section');
            const originalCanvas = document.getElementById('original-canvas');
            const cubistCanvas = document.getElementById('cubist-canvas');
            const downloadBtn = document.getElementById('download-btn');
            const fragmentationSlider = document.getElementById('fragmentation');
            const fragmentationValue = document.getElementById('fragmentation-value');
            const colorIntensitySlider = document.getElementById('color-intensity');
            const colorIntensityValue = document.getElementById('color-intensity-value');
            const styleSelect = document.getElementById('style-select');
            
            // Actualizar valores de los controles
            fragmentationSlider.addEventListener('input', () => {
                fragmentationValue.textContent = fragmentationSlider.value;
                if (imageInput.files.length > 0) {
                    processImage();
                }
            });
            
            colorIntensitySlider.addEventListener('input', () => {
                colorIntensityValue.textContent = `${colorIntensitySlider.value}%`;
                if (imageInput.files.length > 0) {
                    processImage();
                }
            });
            
            styleSelect.addEventListener('change', () => {
                if (imageInput.files.length > 0) {
                    processImage();
                }
            });
            
            // Configurar área de carga
            uploadArea.addEventListener('click', () => {
                imageInput.click();
            });
            
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });
            
            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('dragover');
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                
                if (e.dataTransfer.files.length) {
                    imageInput.files = e.dataTransfer.files;
                    handleImageUpload();
                }
            });
            
            imageInput.addEventListener('change', handleImageUpload);
            
            function handleImageUpload() {
                const file = imageInput.files[0];
                if (!file || !file.type.match('image.*')) {
                    alert('Por favor selecciona un archivo de imagen válido.');
                    return;
                }
                
                const reader = new FileReader();
                
                reader.onload = function(event) {
                    const img = new Image();
                    img.onload = function() {
                        // Mostrar controles y área de previsualización
                        controls.style.display = 'flex';
                        previewContainer.style.display = 'flex';
                        downloadSection.style.display = 'block';
                        
                        // Ajustar tamaño del canvas manteniendo la proporción
                        const maxWidth = 500;
                        const maxHeight = 500;
                        let width = img.width;
                        let height = img.height;
                        
                        if (width > height) {
                            if (width > maxWidth) {
                                height = Math.round(height * maxWidth / width);
                                width = maxWidth;
                            }
                        } else {
                            if (height > maxHeight) {
                                width = Math.round(width * maxHeight / height);
                                height = maxHeight;
                            }
                        }
                        
                        // Establecer tamaño de los canvases
                        originalCanvas.width = width;
                        originalCanvas.height = height;
                        cubistCanvas.width = width;
                        cubistCanvas.height = height;
                        
                        // Dibujar imagen original
                        const origCtx = originalCanvas.getContext('2d');
                        origCtx.clearRect(0, 0, width, height);
                        origCtx.drawImage(img, 0, 0, width, height);
                        
                        // Procesar imagen para efecto cubista
                        processImage(img, width, height);
                    };
                    img.src = event.target.result;
                };
                
                reader.readAsDataURL(file);
            }
            
            function processImage(img, width, height) {
                if (!img) {
                    const origCtx = originalCanvas.getContext('2d');
                    const imageData = origCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
                    img = imageData;
                    width = originalCanvas.width;
                    height = originalCanvas.height;
                }
                
                const cubistCtx = cubistCanvas.getContext('2d');
                cubistCtx.clearRect(0, 0, width, height);
                
                // Obtener configuración
                const fragmentation = parseInt(fragmentationSlider.value);
                const colorIntensity = parseInt(colorIntensitySlider.value) / 100;
                const style = styleSelect.value;
                
                // Dibujar imagen base
                if (img instanceof Image) {
                    cubistCtx.drawImage(img, 0, 0, width, height);
                } else {
                    cubistCtx.putImageData(img, 0, 0);
                }
                
                // Aplicar paleta de colores cubista
                applyCubistPalette(cubistCtx, width, height, colorIntensity, style);
                
                // Aplicar fragmentación geométrica
                applyFragmentation(cubistCtx, width, height, fragmentation, style);
            }
            
            function applyCubistPalette(ctx, width, height, intensity, style) {
                const imageData = ctx.getImageData(0, 0, width, height);
                const data = imageData.data;
                
                // Paleta de colores para cubismo analítico (tonos tierra y neutros)
                const analyticPalette = [
                    {r: 46, g: 27, b: 27},   // Marrón oscuro
                    {r: 93, g: 64, b: 55},   // Marrón medio
                    {r: 141, g: 110, b: 99}, // Beige marrón
                    {r: 215, g: 204, b: 200},// Beige claro
                    {r: 239, g: 235, b: 233},// Beige muy claro
                    {r: 245, g: 245, b: 245} // Casi blanco
                ];
                
                // Paleta para cubismo sintético (más colores)
                const syntheticPalette = [
                    {r: 33, g: 33, b: 33},   // Negro
                    {r: 112, g: 86, b: 57},  // Ocre
                    {r: 165, g: 42, b: 42},  // Rojo tierra
                    {r: 70, g: 130, b: 180}, // Azul acero
                    {r: 139, g: 69, b: 19},  // Marrón cuero
                    {r: 210, g: 180, b: 140} // Beige dorado
                ];
                
                const palette = style === 'analytic' ? analyticPalette : syntheticPalette;
                
                for (let i = 0; i < data.length; i += 4) {
                    // Obtener valores RGB
                    let r = data[i];
                    let g = data[i + 1];
                    let b = data[i + 2];
                    
                    // Convertir a escala de grises
                    const gray = Math.round(r * 0.3 + g * 0.59 + b * 0.11);
                    
                    // Mapear a la paleta (6 tonos)
                    const paletteIndex = Math.floor((gray / 255) * (palette.length - 0.1));
                    const color = palette[paletteIndex];
                    
                    // Aplicar color con intensidad variable
                    data[i] = Math.round(r * (1 - intensity) + color.r * intensity);
                    data[i + 1] = Math.round(g * (1 - intensity) + color.g * intensity);
                    data[i + 2] = Math.round(b * (1 - intensity) + color.b * intensity);
                    
                    // Reducir algo el contraste para efecto pictórico
                    data[i] = Math.min(255, Math.max(0, data[i] + (data[i] > 128 ? -15 : 15)));
                    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + (data[i + 1] > 128 ? -15 : 15)));
                    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + (data[i + 2] > 128 ? -15 : 15)));
                }
                
                ctx.putImageData(imageData, 0, 0);
            }
            
            function applyFragmentation(ctx, width, height, level, style) {
                // Dibujar líneas de fragmentación
                ctx.strokeStyle = style === 'analytic' ? 'rgba(30, 30, 40, 0.7)' : 'rgba(50, 50, 60, 0.8)';
                ctx.lineWidth = 1.5;
                
                // Fragmentación geométrica con líneas diagonales y rectas
                const fragmentSize = Math.max(20, Math.min(width, height) / level);
                
                // Dibujar fragmentos triangulares y rectangulares
                for (let x = 0; x < width; x += fragmentSize) {
                    for (let y = 0; y < height; y += fragmentSize) {
                        // Alternar entre formas geométricas
                        if (Math.random() > 0.5) {
                            // Triángulo
                            ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + fragmentSize, y);
                            ctx.lineTo(x + fragmentSize/2, y + fragmentSize);
                            ctx.closePath();
                            ctx.stroke();
                        } else {
                            // Rectángulo con ligera rotación
                            ctx.save();
                            ctx.translate(x + fragmentSize/2, y + fragmentSize/2);
                            ctx.rotate((Math.random() - 0.5) * 0.2);
                            ctx.strokeRect(-fragmentSize/2, -fragmentSize/2, fragmentSize, fragmentSize);
                            ctx.restore();
                        }
                    }
                }
                
                // Añadir líneas diagonales adicionales para efecto cubista
                ctx.strokeStyle = style === 'analytic' ? 'rgba(50, 50, 60, 0.5)' : 'rgba(80, 80, 100, 0.6)';
                ctx.lineWidth = 1;
                
                for (let i = 0; i < 15; i++) {
                    ctx.beginPath();
                    ctx.moveTo(Math.random() * width, Math.random() * height);
                    ctx.lineTo(Math.random() * width, Math.random() * height);
                    ctx.stroke();
                }
                
                // Añadir texturas de pinceladas sutiles
                if (style === 'synthetic') {
                    ctx.strokeStyle = 'rgba(100, 80, 60, 0.15)';
                    ctx.lineWidth = 3;
                    
                    for (let i = 0; i < 80; i++) {
                        ctx.beginPath();
                        const x = Math.random() * width;
                        const y = Math.random() * height;
                        const length = 15 + Math.random() * 20;
                        const angle = Math.random() * Math.PI * 2;
                        
                        ctx.moveTo(x, y);
                        ctx.lineTo(
                            x + Math.cos(angle) * length,
                            y + Math.sin(angle) * length
                        );
                        ctx.stroke();
                    }
                }
            }
            
            downloadBtn.addEventListener('click', () => {
                // Crear enlace de descarga
                const link = document.createElement('a');
                link.download = 'obra-cubista.png';
                link.href = cubistCanvas.toDataURL('image/png');
                link.click();
            });
        });
    </script>
</body>
</html>

