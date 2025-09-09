import * as THREE from 'three';<a-scene physics="debug: false; gravity: 0 -9.8 0;" webxr="optionalFeatures: local-floor">
<!-- Recursos de audio -->
<a-assets>
  <audio id="sonido-boton" src="door.mp3"></audio>
  <audio id="sonido-puerta" src="success.mp3"></audio>

</a-assets>


<!-- Camera Rig con cámara dentro -->
<a-entity id="rig"
          position="0 0 5"
          dynamic-body="mass: 1; shape: box; halfExtents: 0.3 0.8 0.3;"
          limitar-movimiento>
  <a-entity id="player"
            camera
            wasd-controls
            position="0 1.6 0"
            rotation="0 0 0">
    <a-cursor fuse="true" fuse-timeout="5000"
              geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
              material="color: black; shader: flat; opacity: 0.5">
    </a-cursor>
  </a-entity>
</a-entity>

<!-- Suelo -->
<a-plane position="0 -0.1 0" rotation="-90 0 0" width="100" height="100" color="#edd89f" static-body></a-plane>

<!-- Zona tutorial -->
<a-text value="¡Mira los objetos y selecciona con la vista!"
        position="0 3 3"
        align="center"
        color="black"
        width="4">
</a-text>

<a-box position="1 1.5 3.5"
       depth="0.5" height="0.5" width="0.5"
       class="interactivo"
       sound="on: click; src: #sonido-boton; volume: 2"
       src="caja.jpg">
</a-box>

<!-- Puerta del tutorial -->
<a-box id="puertaTutorial"
       position="-1 1 2"
       width="1" height="2" depth="0.1"
       color="#d19849"
       class="interactivo"
       sound="on: click; src: #sonido-puerta"
       src="door.png">
</a-box>

<!-- Zona principal -->
<a-box position="-5 2.4 0" depth="7" height="5" width="0.1" color="#edd89f" static-body></a-box>
<a-box position="5 2.4 0" depth="7" height="5" width="0.1" color="#edd89f" static-body></a-box>

<!-- Cielo -->
<a-sky color="#ECECEC"></a-sky>
</a-scene>