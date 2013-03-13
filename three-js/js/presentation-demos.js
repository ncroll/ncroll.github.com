(function(PresentationDemo) {
   PresentationDemo.Init = function() {
      var camera = new THREE.PerspectiveCamera(75, 600 / 400, 1, 10000);
      camera.position.z = 1000;

      var scene = new THREE.Scene();

      var sphere = new THREE.SphereGeometry(50, 8, 6, 0);
      var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
      var mesh = new THREE.Mesh(sphere, material);
      scene.add(mesh);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(600, 400);

      document.getElementById('demo1').appendChild(renderer.domElement);
   }
})(window.PresentationDemo = window.PresentationDemo || {})
