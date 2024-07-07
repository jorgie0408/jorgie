function createTabungSectioned(radius, x0 ,y0, z0, section, red, green, blue){
  var vertex = [
  ];
  for(let i = 0;i<=section;i++){
      y = i*0.1;
      for(let j = 0; j <= 360; j++){
              var x = radius * Math.cos(LIBS.degToRad(j));//calculate the x component
              var z = radius * Math.sin(LIBS.degToRad(j));//calculate the y component

              vertex.push(x + x0, y+y0 ,z+z0, red, green, blue);//output vertex

          };
  };


  var faces = [
  ];

  for(let i = 0;i<section;i++){
      for(let j = 0;j<360;j++){
          x = j + i*361;
          y = j+1 + i*361;
          z = j+361 + i*361;
          faces.push(x,y,z);
         
          x = x+361;
          y = y+361;
          z = z-360;
          faces.push(x,y,z);

      }
  }

  for(let i = 0;i<359;i++){
      faces.push(0,i+1,i+2);

      var LastIndex=(vertex.length/6)-1;
      faces.push(LastIndex,LastIndex-i,LastIndex-i-1);
  }


  return [vertex, faces];
}
function bezierCurve(controlPoints, numPoints) {
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = Math.pow(1 - t, 3) * controlPoints[0][0] + 
                3 * Math.pow(1 - t, 2) * t * controlPoints[1][0] + 
                3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][0] + 
                Math.pow(t, 3) * controlPoints[3][0];
      const y = x; // Using x-coordinate as the y-coordinate
      points.push([x, y]);
  }
  return points;
}
function createTabungSectionedBadan(radius, x0 ,y0, z0, section, red, green, blue){
  var vertex = [
  ];
  
  var temp;

  var kurvaBadan = bezierCurve([[radius],[radius+0.2],[radius+0.2],[radius]],section);

  console.log(kurvaBadan);
  for(let i = 0;i<=section;i++){
      y = i*0.025;
      temp = kurvaBadan[i];
      for(let j = 0; j <= 360; j++){
              var x = temp[0] * Math.cos(LIBS.degToRad(j));//calculate the x component
              var z = radius * Math.sin(LIBS.degToRad(j));//calculate the y component

              vertex.push(x + x0, y+y0 ,z+z0, red, green, blue);//output vertex

          };
  };


  var faces = [
  ];

  for(let i = 0;i<section;i++){
      for(let j = 0;j<360;j++){
          x = j + i*361;
          y = j+1 + i*361;
          z = j+361 + i*361;
          faces.push(x,y,z);
         
          x = x+361;
          y = y+361;
          z = z-360;
          faces.push(x,y,z);

      }
  }

  for(let i = 0;i<359;i++){
      faces.push(0,i+1,i+2);

      var LastIndex=(vertex.length/6)-1;
      faces.push(LastIndex,LastIndex-i,LastIndex-i-1);
  }


  return [vertex, faces];
}


function createTabungSectionedHalfKiri(radius, x0, y0, z0, section, red, green, blue) {
  var vertex = [];
  var faces = [];

  for (let i = 0; i <= section; i++) {
      y = i * 0.1;
      for (let j = 90; j <= 270; j++) { // Mengubah batas sudut hanya hingga 180 derajat
          var x = radius * Math.cos(LIBS.degToRad(j)); // Hitung komponen x
          var z = radius * Math.sin(LIBS.degToRad(j)); // Hitung komponen z

          vertex.push(x + x0, y + y0, z + z0, red, green, blue); // Tambahkan vertex
      }
  }

  for (let i = 0; i < section; i++) {
      for (let j = 0; j < 180; j++) { // Mengubah batas sudut hanya hingga 180 derajat
          x = j + i * 181; // Ubah penyesuaian indeks
          y = j + 1 + i * 181; // Ubah penyesuaian indeks
          z = j + 181 + i * 181; // Ubah penyesuaian indeks
          faces.push(x, y, z);

          x = x + 181;
          y = y + 181;
          z = z - 180;
          faces.push(x, y, z);
      }
  }

  for (let i = 0; i < 179; i++) { // Mengubah batas iterasi
      faces.push(0, i + 1, i + 2); // Tambahkan wajah
      var LastIndex = (vertex.length / 6) - 1;
      faces.push(LastIndex, LastIndex - i, LastIndex - i - 1);
  }

  return [vertex, faces];
}

// function createBalok()

function createTabungSectionedHalfKanan(radius, x0, y0, z0, section, red, green, blue) {
  var vertex = [];
  var faces = [];

  for (let i = 0; i <= section; i++) {
      y = i * 0.1;
      for (let j = -90; j <= 90; j++) { // Mengubah batas sudut hanya hingga 180 derajat
          var x = radius * Math.cos(LIBS.degToRad(j)); // Hitung komponen x
          var z = radius * Math.sin(LIBS.degToRad(j)); // Hitung komponen z

          vertex.push(x + x0, y + y0, z + z0, red, green, blue); // Tambahkan vertex
      }
  }

  for (let i = 0; i < section; i++) {
      for (let j = 0; j < 180; j++) { // Mengubah batas sudut hanya hingga 180 derajat
          x = j + i * 181; // Ubah penyesuaian indeks
          y = j + 1 + i * 181; // Ubah penyesuaian indeks
          z = j + 181 + i * 181; // Ubah penyesuaian indeks
          faces.push(x, y, z);

          x = x + 181;
          y = y + 181;
          z = z - 180;
          faces.push(x, y, z);
      }
  }

  for (let i = 0; i < 179; i++) { // Mengubah batas iterasi
      faces.push(0, i + 1, i + 2); // Tambahkan wajah
      var LastIndex = (vertex.length / 6) - 1;
      faces.push(LastIndex, LastIndex - i, LastIndex - i - 1);
  }

  return [vertex, faces];
}


function createSphere(x, y, z, radius, segments, leftColor, rightColor) {
  var vertices = [];
  var colors = [];
  
  var angleIncrement = (Math.PI) / segments;
  
  for (var i = 0; i <= segments; i++) { // Loop untuk latitude (paralel)
      var latAngle = Math.PI * (-0.5 + (i / segments)); // Mulai dari -π/2 dan berakhir di 0
      var sinLat = Math.sin(latAngle);
      var cosLat = Math.cos(latAngle);
  
      for (var j = 0; j <= segments; j++) { // Loop untuk longitude (meridian)
          var lonAngle = 2 * Math.PI * (j / segments); // Loop dari 0 ke 2π
          var sinLon = Math.sin(lonAngle);
          var cosLon = Math.cos(lonAngle);
  
          var xCoord = cosLon * cosLat;
          var yCoord = sinLon * cosLat;
          var zCoord = sinLat;
  
          var vertexX = x + radius * xCoord;
          var vertexY = y + radius * yCoord;
          var vertexZ = z + radius * zCoord;

          // Memisahkan bola menjadi dua bagian
          var color;
          if (xCoord >= 0) { // Bagian kanan
              color = rightColor;
          } else { // Bagian kiri
              color = leftColor;
          }
  
          vertices.push(vertexX, vertexY, vertexZ);
          vertices.push(color[0], color[1], color[2]);
      }
  }
  
  var faces = [];
  for (var i = 0; i < segments; i++) {
      for (var j = 0; j < segments; j++) {
          var index = i * (segments + 1) + j;
          var nextIndex = index + segments + 1;
  
          faces.push(index, nextIndex, index + 1);
          faces.push(nextIndex, nextIndex + 1, index + 1);
      }
  }
  
  return [vertices, faces];
}


function createEllipsoid(radiusWidth, radiusHeight, radiusDepth, x0, y0, z0, red, green, blue){
  var vertexArray = [];
  var facesArray = [];
  var uSteps = 30;
  var vSteps = 30;

  for(var u = 0; u <= uSteps; u++){
      for(var v = 0; v <= vSteps; v++){
          var thetaU = (u/uSteps) * Math.PI * 2;
          var thetaV = (v/vSteps) * Math.PI;

          var x = x0 + (radiusWidth * Math.cos(thetaU) * Math.sin(thetaV));
          var y = y0 + (radiusHeight * Math.sin(thetaU) * Math.sin(thetaV));
          var z = z0 + (radiusDepth * Math.cos(thetaV));

          vertexArray.push(x, y, z, red, green, blue);

          if(u < uSteps && v < vSteps){
              var first = (u * (vSteps + 1)) + v;
              var second = first + vSteps + 1;

              facesArray.push(first, second, first + 1);
              facesArray.push(second, second + 1, first + 1);
          }
      }
  }

  return [vertexArray, facesArray];
}


function createCone(radius, height, x0, y0, z0, segments) {
  var vertices = [];
  var indices = [];
  var angleIncrement = (2 * Math.PI) / segments;
  
  // Loop untuk setiap segmen pada setengah cone
  for (var i = 0; i < segments; i++) {
      var theta = i * angleIncrement;
      var x = radius * Math.cos(theta);
      var z = radius * Math.sin(theta);
      
      var color;
      if (x <= 0) { // Bagian kiri
          color = [0.4, 0.4, 0.4]; // Warna abu-abu
      } else { // Bagian kanan
          color = [255, 255, 255]; // Warna putih
      }
      
      vertices.push(x + x0, y0, z + z0);
      vertices.push(color[0], color[1], color[2]);
      
      // Menentukan indeks untuk membentuk segitiga
      if (i < segments - 1) {
          indices.push(i, segments, i + 1);
      } else {
          indices.push(i, segments, 0);
      }
  }

  
  
  var topColor = [0.4, 0.4, 0.4]; // Warna putih secara default
    if (vertices[0] <= 0) { // Jika sisi kiri lebih dominan
        topColor = [0, 0, 0]; // Warna abu-abu
    }
    
    // Menambahkan titik puncak
    vertices.push(x0, y0 + height, z0);
    vertices.push(topColor[0], topColor[1], topColor[2]); 
    
    return [vertices, indices];
}


function normalizeScreen(x,y,width,height){
  var nx = 2*x/width - 1
  var ny = -2*y/height + 1
 
  return [nx,ny]
}
 
function generateBSpline(controlPoint, m, degree){
  var curves = [];
  var knotVector = []
 
  var n = controlPoint.length/2;
 
 
  // Calculate the knot values based on the degree and number of control points
  for (var i = 0; i < n + degree+1; i++) {
    if (i < degree + 1) {
      knotVector.push(0);
    } else if (i >= n) {
      knotVector.push(n - degree);
    } else {
      knotVector.push(i - degree);
    }
  }
 
 
  var basisFunc = function(i,j,t){
      if (j == 0){
        if(knotVector[i] <= t && t<(knotVector[(i+1)])){
          return 1;
        }else{
          return 0;
        }
      }
 
      var den1 = knotVector[i + j] - knotVector[i];
      var den2 = knotVector[i + j + 1] - knotVector[i + 1];
 
      var term1 = 0;
      var term2 = 0;
 
 
      if (den1 != 0 && !isNaN(den1)) {
        term1 = ((t - knotVector[i]) / den1) * basisFunc(i,j-1,t);
      }
 
      if (den2 != 0 && !isNaN(den2)) {
        term2 = ((knotVector[i + j + 1] - t) / den2) * basisFunc(i+1,j-1,t);
      }
 
      return term1 + term2;
  }

 
  for(var t=0;t<m;t++){
    var x=0;
    var y=0;
 
    var u = (t/m * (knotVector[controlPoint.length/2] - knotVector[degree]) ) + knotVector[degree] ;
 
    //C(t)
    for(var key =0;key<n;key++){
 
      var C = basisFunc(key,degree,u);
      console.log(C);
      x+=(controlPoint[key*2] * C);
      y+=(controlPoint[key*2+1] * C);
      console.log(t+" "+degree+" "+x+" "+y+" "+C);
    }
    curves.push(x);
    curves.push(y);
 
  }
  console.log(curves)
  return curves;
}
function createConeSam(radius, height, x0, y0, z0, segments, red, green, blue) {
  var vertices = [];
  var indices = [];


  var angleIncrement = (2 * Math.PI) / segments;


  // Basis lingkaran kerucut
  for (var i = 0; i < segments; i++) {
      var theta = i * angleIncrement;
      var x = radius * Math.cos(theta);
      var z = radius * Math.sin(theta);


      // Vertex
      vertices.push(x + x0, y0, z + z0);


      // Warna
      vertices.push(red, green, blue);


      // Indices untuk menggambar wajah (faces)
      if (i < segments - 1) {
          indices.push(i, segments, i + 1); // Menghubungkan setiap titik basis dengan titik puncak
      } else {
          indices.push(i, segments, 0); // Menghubungkan titik terakhir di lingkaran dengan titik awal untuk menutup kerucut
      }
  }

  // Puncak kerucut
  vertices.push(x0, y0 + height, z0);
  vertices.push(red, green, blue); // Warna puncak sama dengan warna basis


  return [vertices, indices];
}
function createRectangularPrism(width, height, depth, x0, y0, z0, red, green, blue) {
  var vertexArray = [];
  var facesArray = [];

  // Titik-titik balok
  var vertices = [
      [-width/2, -height/2, -depth/2],
      [-width/2, -height/2, depth/2],
      [-width/2, height/2, -depth/2],
      [-width/2, height/2, depth/2],
      [width/2, -height/2, -depth/2],
      [width/2, -height/2, depth/2],
      [width/2, height/2, -depth/2],
      [width/2, height/2, depth/2]
  ];

  // Menambahkan titik-titik ke vertexArray dengan warna yang sama
  for (var i = 0; i < vertices.length; i++) {
      var x = vertices[i][0] + x0;
      var y = vertices[i][1] + y0;
      var z = vertices[i][2] + z0;
      vertexArray.push(x, y, z, red, green, blue);
  }

  // Menambahkan wajah balok
  var faces = [
      [0, 1, 3, 2], // Depan
      [4, 5, 7, 6], // Belakang
      [0, 1, 5, 4], // Kiri
      [2, 3, 7, 6], // Kanan
      [0, 2, 6, 4], // Bawah
      [1, 3, 7, 5]  // Atas
  ];

  // Menambahkan indeks wajah ke facesArray
  for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      facesArray.push(face[0], face[1], face[2]);
      facesArray.push(face[0], face[2], face[3]);
  }

  return [vertexArray, facesArray];
}

function createRectangularDiagonal(width, height, depth, x0, y0, z0, red, green, blue, degree) {
  var vertexArray = [];
  var facesArray = [];

  // Titik-titik balok
  var vertices = [
      [-width/2, -height/2, -depth/2],
      [-width/2, -height/2, depth/2],
      [-width/2, height/2, -depth/2],
      [-width/2, height/2, depth/2],
      [width/2, -height/2, -depth/2],
      [width/2, -height/2, depth/2],
      [width/2, height/2, -depth/2],
      [width/2, height/2, depth/2]
  ];

  // Menambahkan titik-titik ke vertexArray dengan warna yang sama
  for (var i = 0; i < vertices.length; i++) {
      var x = vertices[i][0] + x0;
      var y = vertices[i][1] + y0;

      x = (x-x0)*Math.cos(degree) - (y-y0)*-Math.sin(degree) + x0;
      y = (x-x0)*Math.sin(degree) - (y-y0)*Math.cos(degree) + y0;
      var z = vertices[i][2] + z0;
      vertexArray.push(x, y, z, red, green, blue);
  }

  // Menambahkan wajah balok
  var faces = [
      [0, 1, 3, 2], // Depan
      [4, 5, 7, 6], // Belakang
      [0, 1, 5, 4], // Kiri
      [2, 3, 7, 6], // Kanan
      [0, 2, 6, 4], // Bawah
      [1, 3, 7, 5]  // Atas
  ];

  // Menambahkan indeks wajah ke facesArray
  for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      facesArray.push(face[0], face[1], face[2]);
      facesArray.push(face[0], face[2], face[3]);
  }

  return [vertexArray, facesArray];
}



function createPyramid(baseWidth, height, x0, y0, z0, red, green, blue) {
  var vertexArray = [];
  var facesArray = [];

  // Titik-titik piramida
  var vertices = [
      // Base
      [-baseWidth/2, -height/2, -baseWidth/2],
      [-baseWidth/2, -height/2, baseWidth/2],
      [baseWidth/2, -height/2, baseWidth/2],
      [baseWidth/2, -height/2, -baseWidth/2],
      // Apex
      [0, height/2, 0]
  ];

  // Menambahkan titik-titik ke vertexArray dengan warna yang sama
  for (var i = 0; i < vertices.length; i++) {
      var x = vertices[i][0] + x0;
      var y = vertices[i][1] + y0;
      var z = vertices[i][2] + z0;
      vertexArray.push(x, y, z, red, green, blue);
  }

  // Menambahkan wajah piramida
  var faces = [
      [0, 1, 4], // Triangle 1
      [1, 2, 4], // Triangle 2
      [2, 3, 4], // Triangle 3
      [3, 0, 4], // Triangle 4
      [0, 1, 2, 3] // Base
  ];

  // Menambahkan indeks wajah ke facesArray
  for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      facesArray.push(face[0], face[1], face[2]);
  }

  return [vertexArray, facesArray];
}

function bezierCurve2(controlPoints, numPoints) {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const x = Math.pow(1 - t, 3) * controlPoints[0][0] + 
                  3 * Math.pow(1 - t, 2) * t * controlPoints[1][0] + 
                  3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][0] + 
                  Math.pow(t, 3) * controlPoints[3][0];
                const y = Math.pow(1 - t, 3) * controlPoints[0][1] + 
                3 * Math.pow(1 - t, 2) * t * controlPoints[1][1] + 
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][1] + 
            Math.pow(t, 3) * controlPoints[3][1];
            points.push([x, y]);
    }
    return points;
}
function createBezierRectangularPrism(x0, y0, x1, y1, x2, y2, x3, y3, z0, red, green, blue, section) {
    var vertex = [];
    var faces = [];

    // Generate bezier curve points
    var bezierCurvePoints = bezierCurve2([[x0, y0], [x1, y1], [x2, y2], [x3, y3]], section);

    // Generate vertices based on the bezier curve points
    for (let i = 0; i <= section; i++) {
        var x = bezierCurvePoints[i][0]; // x-coordinate from the bezier curve
        var y = bezierCurvePoints[i][1]; // y-coordinate from the bezier curve

        // Push vertices
        vertex.push(x, y, z0, red, green, blue); // Top vertex
        vertex.push(x, y - 0.05, z0, red, green, blue); // Bottom vertex
    }

    // Generate faces
    for (let i = 0; i < section; i++) {
        var startIndex = i * 2;
        faces.push(startIndex, startIndex + 1, startIndex + 3);
        faces.push(startIndex, startIndex + 3, startIndex + 2);
    }

    return [vertex, faces];
}

function createSphere1(x, y, z, radius, segments, red, green, blue) {
  var vertices = [];
  var colors = [];
  
  
  var angleIncrement = (2 * Math.PI) / segments;
  
  
  for (var i = 0; i <= segments; i++) { // Mengubah batas atas iterasi
      var latAngle = Math.PI * (-0.5 + (i / segments));
      var sinLat = Math.sin(latAngle);
      var cosLat = Math.cos(latAngle);
  
      for (var j = 0; j <= segments; j++) {
          var lonAngle = 2 * Math.PI * (j / segments);
          var sinLon = Math.sin(lonAngle);
          var cosLon = Math.cos(lonAngle);
  
          var xCoord = cosLon * cosLat;
          var yCoord = sinLon * cosLat;
          var zCoord = sinLat;
  
          var vertexX = x + radius * xCoord;
          var vertexY = y + radius * yCoord;
          var vertexZ = z + radius * zCoord;
  
          vertices.push(vertexX, vertexY, vertexZ);
          vertices.push(red, green, blue);
      }
  }
  
  var faces = [];
  for (var i = 0; i < segments; i++) {
    for (var j = 0; j < segments; j++) {
      var index = i * (segments + 1) + j;
      var nextIndex = index + segments + 1;
  
      faces.push(index, nextIndex, index + 1);
      faces.push(nextIndex, nextIndex + 1, index + 1);
    }
  }
  
  
  return [vertices, faces];
  }


var GL;
class myObject{
  child=[];
  object_vertex = [];
  OBJECT_VERTEX = GL.createBuffer();
  object_faces = [];
  OBJECT_FACES = GL.createBuffer();
 
  compile_shader = function(source, type, typeString) {
      var shader = GL.createShader(type);
      GL.shaderSource(shader, source);
      GL.compileShader(shader);
      if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
          alert("ERROR IN " + typeString + " SHADER: "
          + GL.getShaderInfoLog(shader));
          return false;
      }
      return shader;
  };


  shader_vertex;
  shader_fragment;
  SHADER_PROGRAM;
  _Pmatrix;
  _Vmatrix;
  _Mmatrix;
  _color;
  _position;
  MOVEMATRIX = LIBS.get_I4();
  constructor(object_vertex, object_faces, shader_vertex_source, shader_fragment_source){
      this.object_vertex=object_vertex;
      this.object_faces=object_faces;
      this.shader_vertex_source=shader_vertex_source;
      this.shader_fragment_source=shader_fragment_source;
      this.shader_vertex = this.compile_shader(this.shader_vertex_source,GL.VERTEX_SHADER, "VERTEX");
      this.shader_fragment = this.compile_shader(this.shader_fragment_source,GL.FRAGMENT_SHADER, "FRAGMENT");
      this.SHADER_PROGRAM = GL.createProgram();
      GL.attachShader(this.SHADER_PROGRAM, this.shader_vertex);
      GL.attachShader(this.SHADER_PROGRAM, this.shader_fragment);
      GL.linkProgram(this.SHADER_PROGRAM);
      this._Pmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Pmatrix");
      this._Vmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Vmatrix");
      this._Mmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Mmatrix");
      this._color = GL.getAttribLocation(this.SHADER_PROGRAM, "color");
      this._position = GL.getAttribLocation(this.SHADER_PROGRAM, "position");
      GL.enableVertexAttribArray(this._color);
      GL.enableVertexAttribArray(this._position);
      GL.useProgram(this.SHADER_PROGRAM);
      this.initializeObject();
  }
  setUniform4(PROJMATRIX, VIEWMATRIX){
      GL.useProgram(this.SHADER_PROGRAM);
      GL.uniformMatrix4fv(this._Pmatrix,false,PROJMATRIX);
      GL.uniformMatrix4fv(this._Vmatrix,false,VIEWMATRIX);
      GL.uniformMatrix4fv(this._Mmatrix,false,this.MOVEMATRIX);
  }
 
  draw(){
      GL.useProgram(this.SHADER_PROGRAM);
      GL.bindBuffer(GL.ARRAY_BUFFER, this.OBJECT_VERTEX);


          GL.vertexAttribPointer(this._position,3,GL.FLOAT,false,4*(3+3),0);
          GL.vertexAttribPointer(this._color,3,GL.FLOAT,false,4*(3+3),4*3);


          GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.OBJECT_FACES);
          GL.drawElements(GL.TRIANGLES, this.object_faces.length,GL.UNSIGNED_SHORT,0);
          for(var i=0;i<this.child.length;i++){
              this.child[i].draw();
          }
  }
  addchild(child){
      this.child.push(child);
  }


  addChilds(child) {
    child.forEach(obj => {
      this.child.push(obj);
    });
  }



  initializeObject(){
      GL.bindBuffer(GL.ARRAY_BUFFER, this.OBJECT_VERTEX);
      GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.object_vertex), GL.STATIC_DRAW);
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.OBJECT_FACES);
      GL.bufferData(GL.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.object_faces),GL.STATIC_DRAW);


  }
}
var THETA=0;
var PHI=0;
function main() {
    function generateBSpline(controlPoint, m, degree) {
      var curves = [];
      var knotVector = []

      var n = controlPoint.length / 5;


      // Calculate the knot values based on the degree and number of control points
      for (var i = 0; i < n + degree + 1; i++) {
          if (i < degree + 1) {
              knotVector.push(0);
          } else if (i >= n) {
              knotVector.push(n - degree);
          } else {
              knotVector.push(i - degree);
          }
      }



      var basisFunc = function (i, j, t) {
          if (j == 0) {
              if (knotVector[i] <= t && t < (knotVector[(i + 1)])) {
                  return 1;
              } else {
                  return 0;
              }
          }

          var den1 = knotVector[i + j] - knotVector[i];
          var den2 = knotVector[i + j + 1] - knotVector[i + 1];

          var term1 = 0;
          var term2 = 0;


          if (den1 != 0 && !isNaN(den1)) {
              term1 = ((t - knotVector[i]) / den1) * basisFunc(i, j - 1, t);
          }

          if (den2 != 0 && !isNaN(den2)) {
              term2 = ((knotVector[i + j + 1] - t) / den2) * basisFunc(i + 1, j - 1, t);
          }

          return term1 + term2;
      }


      for (var t = 0; t < m; t++) {
          var x = 0;
          var y = 0;

          var u = (t / m * (knotVector[controlPoint.length / 5] - knotVector[degree])) + knotVector[degree];

          //C(t)
          for (var key = 0; key < n; key++) {

              var C = basisFunc(key, degree, u);
              x += (controlPoint[key * 5] * C);
              y += (controlPoint[key * 5 + 1] * C);
          }
          curves.push(x);
          curves.push(y);
          curves.push(0);
          curves.push(0);
          curves.push(0);

      }
      return curves;
  }

  function normalizeX(x) {
      return ((x/CANVAS.width)*2)-1;
  }
  function normalizeY(y) {
      return -1*(((y/CANVAS.height)*2)-1);
  }

    var CANVAS = document.getElementById("mycanvas");
  
    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;
  
    try {
      GL = CANVAS.getContext("webgl", { antialias: true });
      var EXT = GL.getExtension("OES_element_index_uint");
    } catch (e) {
      alert("WebGL context cannot be initialized");
      return false;
    }
  
    var drag = false;
    var x_prev, y_prev;
    var dX = 0,
      dY = 0;
    var THETA = 0,
      PHI = 0;
    var AMORTIZATION = 0.95; //gaya gesek
    var mouseDown = function (e) {
      drag = true;
      x_prev = e.pageX;
      y_prev = e.pageY;
      e.preventDefault(); //mencegah fungsi awal dri tombol yg di klik, misal klik kanan biasa keluarin inspect dkk tpi itu bisa dibatesi
      return false;
    };
  
    var mouseUp = function (e) {
      drag = false;
    };
  
    var mouseMove = function (e) {
      drag = false;
      // if (!drag) return false;
      // dX = ((e.pageX - x_prev) * 2 * Math.PI) / CANVAS.width;
      // dY = ((e.pageY - y_prev) * 2 * Math.PI) / CANVAS.height;
      // THETA += dX;
      // PHI += dY;
      // x_prev = e.pageX;
      // y_prev = e.pageY;
      // e.preventDefault();
    };

     // Scaling
     var SCALE = 1.0;
     var SCALE_SPEED = 0.1;

     var keys = {
      up: false,
      down: false,
      left: false,
      right: false
  };


    var translateX=0;
    var translateY=0;
    var translateZ=0;
    var targetX = translateX;
    var targetY = translateY;
    var keydown = function (e){
      if (e.key == 'w' || e.key == 'W') {
        SCALE += SCALE_SPEED;
      } else if (e.key == 's' || e.key == 'S') {
        SCALE -= SCALE_SPEED;
      }
      if (e.key == 'i') {
        targetY += 2;
      } else if (e.key == 'k') {
        targetY -= 2;
      } else if (e.key == 'j') {
        targetX -= 2;
      } else if (e.key == 'l') {
        targetX += 2;
      }
      
    }

    
    
    
    window.addEventListener("keydown", keydown, false);

  CANVAS.addEventListener('mousedown',mouseDown, false);
  CANVAS.addEventListener('mouseup', mouseUp, false);
  CANVAS.addEventListener('mouseout',mouseUp, false);
  CANVAS.addEventListener('mousemove',mouseMove, false);



 
  //SHADER
  var shader_vertex_source=`
  attribute vec3 position;
  attribute vec3 color;


  uniform mat4 Pmatrix;
  uniform mat4 Vmatrix;
  uniform mat4 Mmatrix;
 
  varying vec3 vColor;
  void main(void) {
      gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position,1.0);
      gl_PointSize = 20.0;
      vColor = color;
  }`;
  var shader_fragment_source = `
  precision mediump float;
  varying vec3 vColor;
  void main(void) {
      gl_FragColor = vec4(vColor,1.0);
  }`;


      //============================================KARAKTER =======================================================
      //========KEPALA=========
      var sphere = [];
      sphere = createSphere1(0, 1.3, 0, 1, 80, 0.8, 0.8, 0.8);
      var sphere_vertex = sphere[0];
      var sphere_faces = sphere[1];
      var char1 = new myObject(sphere_vertex,sphere_faces,shader_vertex_source,shader_fragment_source);

      //=========TELINGA KIRI=========
      var telingaKiri= [];
      telingaKiri = createEllipsoid(0.35, 0.8, 0.1, -0.6, 1.57, 0.05, 1, 1, 1);
      var telingaKiri_vertex = telingaKiri[0];
      var telingaKiri_faces = telingaKiri[1];
      var char2 = new myObject(telingaKiri_vertex, telingaKiri_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char2);

      var telingaKiriPink= [];
      telingaKiriPink = createEllipsoid(0.275, 0.65, 0.3, -0.6,1.57, 0.05, 1, 0.7137, 0.7569);
      var telingaKiriPink_vertex = telingaKiriPink[0];
      var telingaKiriPink_faces = telingaKiriPink[1];
      var char3 = new myObject(telingaKiriPink_vertex, telingaKiriPink_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char3);

      //========TELINGA KANAN=========
      var telingaKanan= [];
      telingaKanan = createEllipsoid(0.35, 0.8, 0.1, 0.6, 1.57, 0.05, 1, 1, 1);
      var telingaKanan_vertex = telingaKanan[0];
      var telingaKanan_faces = telingaKanan[1];
      var char4 = new myObject(telingaKanan_vertex, telingaKanan_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char4);
      
      var telingaKananPink= [];
      telingaKananPink = createEllipsoid(0.275, 0.65, 0.3, 0.6,1.57, 0.05, 1, 0.7137, 0.7569);
      var telingaKananPink_vertex = telingaKananPink[0];
      var telingaKananPink_faces = telingaKananPink[1];
      var char5 = new myObject(telingaKananPink_vertex, telingaKananPink_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char5);
      

      //=========KAKI KIRI==========
      var kakiKiri= [];
      kakiKiri = createTabungSectioned(0.35,-0.35,-1.85,0,7,0.8,0.8,0.8);
      var kakiKiri_vertex = kakiKiri[0];
      var kakiKiri_faces = kakiKiri[1];
      var char6 = new myObject(kakiKiri_vertex, kakiKiri_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char6);

      //=========KAKI KANAN==========
      var kakiKanan= [];
      kakiKanan = createTabungSectioned(0.35,0.35,-1.85,0,7,0.8,0.8,0.8);
      var kakiKanan_vertex = kakiKanan[0];
      var kakiKanan_faces = kakiKanan[1];
      var char7 = new myObject(kakiKanan_vertex, kakiKanan_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char7);


      
      //==========BADAN=============
    var rad4 = 0.5;
    var belang1_vertex = [];
    belang1_vertex.push(0, -0.5, 0.85);
    belang1_vertex.push(1, 1, 1);

    // Create an oval shape by modifying the y coordinate
    for (let i = 0; i <= 360; i++) {
    var x = rad4 * Math.cos(i / Math.PI);
    var y = rad4 * Math.sin(i / Math.PI) * 1.2; // stretch the y-axis to create an oval shape
    belang1_vertex.push(x, y + (-0.5), 0.85);
    belang1_vertex.push(1);
    belang1_vertex.push(1);
    belang1_vertex.push(1);
    }

    var belang1_faces = [];
    for (let i = 0; i < 360; i++) {
    belang1_faces.push(0, i, i + 1);
    }

    var char8 = new myObject(belang1_vertex, belang1_faces, shader_vertex_source, shader_fragment_source);
    char1.addchild(char8);
    
      var sphere2 = [];
      sphere2 = createSphere1(0, -0.00001, 0.0001, 0.85, 100, 0.8, 0.8, 0.8);
      var sphere2_vertex = sphere2[0];
      var sphere2_faces = sphere2[1];
      var char9 = new myObject(sphere2_vertex,sphere2_faces,shader_vertex_source,shader_fragment_source);
      char1.addchild(char9);
      
      var sphere3 = [];
      sphere3 = createSphere1(0, -0.84, 0.0001, 0.8, 100, 0.8, 0.8, 0.8);
      var sphere3_vertex = sphere3[0];
      var sphere3_faces = sphere3[1];
      var char10 = new myObject(sphere3_vertex,sphere3_faces,shader_vertex_source,shader_fragment_source);
      char1.addchild(char10);

      var badan= [];
      badan = createTabungSectionedBadan(0.8,0,-1.25,0,65, 0.8, 0.8, 0.8);
      var badan_vertex = badan[0];
      var badan_faces = badan[1];
      var char11 = new myObject(badan_vertex, badan_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char11);


      //=========HIDUNG==========
      var hidung= [];
      hidung = createEllipsoid(0.09,0.06,0.2,0,1.2,1.1,1, 0.7137, 0.7569);
      var hidung_vertex = hidung[0];
      var hidung_faces = hidung[1];
      var char12 = new myObject(hidung_vertex, hidung_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char12);


      //mata kanan
      var rad = 0.13;
      var circle1_vertex = [];
      circle1_vertex.push(0.45,1.28,1.138);
      circle1_vertex.push(0,0,0);
      for (let i = 0; i <= 360; i++) {
          circle1_vertex.push(0.45 + rad * Math.cos(i/Math.PI));
          circle1_vertex.push(1.28 + rad * Math.sin(i/Math.PI));
          circle1_vertex.push(1.138);
          circle1_vertex.push(0);
          circle1_vertex.push(0);
          circle1_vertex.push(0);
      }
      var circle1_faces = [];
      for (let i = 0; i < 360; i++) {
          circle1_faces.push(0,i,i+1);
      }
      var char13 = new myObject(circle1_vertex, circle1_faces, shader_vertex_source, shader_fragment_source);
      char1.addchild(char13)

      //mata kiri
      var rad2 = 0.13;
      var circle2_vertex = [];
      circle2_vertex.push(-0.45,1.28,1.38);
      circle2_vertex.push(0,0,0);
      for (let i = 0; i <= 360; i++) {
          circle2_vertex.push(-0.45 + rad2 * Math.cos(i/Math.PI));
          circle2_vertex.push(1.28 + rad2 * Math.sin(i/Math.PI));
          circle2_vertex.push(1.138);
          circle2_vertex.push(0);
          circle2_vertex.push(0);
          circle2_vertex.push(0);
      }
      var circle2_faces = [];
      for (let i = 0; i < 360; i++) {
          circle2_faces.push(0,i,i+1);
      }
      var char14 = new myObject(circle2_vertex, circle2_faces, shader_vertex_source, shader_fragment_source);
      char1.addchild(char14)
      
      //Belang putih kepala
      var rad3 = 0.38;
      var belang_vertex = [];
      belang_vertex.push(0,1.18,1.135);
      belang_vertex.push(1,1,1);
      for (let i = 0; i <= 360; i++) {
          belang_vertex.push(0+ rad3 * Math.cos(i/Math.PI));
          belang_vertex.push(1.18 + rad3 * Math.sin(i/Math.PI));
          belang_vertex.push(1.135);
          belang_vertex.push(1);
          belang_vertex.push(1);
          belang_vertex.push(1);
      }
      var belang_faces = [];
      for (let i = 0; i < 360; i++) {
          belang_faces.push(0,i,i+1);
      }
      var char15 = new myObject(belang_vertex, belang_faces, shader_vertex_source, shader_fragment_source);
      char1.addchild(char15)


      var telapak_kaki_kiri= [];
      telapak_kaki_kiri = createEllipsoid(0.375,0.2,0.45,0.35,-1.9,0,1,1,1);
      var telapak_kaki_kiri_vertex = telapak_kaki_kiri[0];
      var telapak_kaki_kiri_faces = telapak_kaki_kiri[1];
      var char16 = new myObject(telapak_kaki_kiri_vertex, telapak_kaki_kiri_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char16);

      var telapak_kaki_kanan= [];
      telapak_kaki_kanan = createEllipsoid(0.375,0.2,0.45,-0.35,-1.9,0,1,1,1);
      var telapak_kaki_kanan_vertex =  telapak_kaki_kanan[0];
      var telapak_kaki_kanan_faces = telapak_kaki_kanan[1];
      var char17 = new myObject(telapak_kaki_kanan_vertex, telapak_kaki_kanan_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char17);

      var tangan_kiri= [];
      tangan_kiri = createEllipsoid(0.3,0.75,0.3,0.95,-0.45,0,1,1,1);
      var tangan_kiri_vertex =  tangan_kiri[0];
      var tangan_kiri_faces = tangan_kiri[1];
      var char18 = new myObject(tangan_kiri_vertex, tangan_kiri_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char18);

      var tangan_kanan= [];
      tangan_kanan = createEllipsoid(0.3,0.75,0.3,-0.95,-0.45,0,1,1,1);
      var tangan_kanan_vertex =  tangan_kanan[0];
      var tangan_kanan_faces = tangan_kanan[1];
      var char19 = new myObject(tangan_kanan_vertex, tangan_kanan_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char19);

      //mulut
      var garisHidung = [];
      garisHidung = createTabungSectioned(0.05,0,0.9,1.1,3,0,0,0);
      var garisHidung_vertex = garisHidung[0];
      var garisHidung_faces = garisHidung[1];
      var char20 = new myObject(garisHidung_vertex, garisHidung_faces, shader_vertex_source,shader_fragment_source);
      char1.addchild(char20);

      var garisKurva = [];
      garisKurva = createBezierRectangularPrism(-0.15, 0.95, 0, 0.85, 0, 0.85, 0.15, 0.95, 1.2, 0, 0, 0, 100);
      var garisKurva_vertex = garisKurva[0];
      var garisKurva_faces = garisKurva[1];
      var char21 =new myObject(garisKurva_vertex,garisKurva_faces,shader_vertex_source,shader_fragment_source);
      char1.addchild(char21);
      //===================================================================================================
      //========Environment=========
      var tanah = [];
      tanah = createTabungSectioned(50,0,-12.35,0,100,19/255,150/255,21/255);
      var tanah_vertex = tanah[0];
      var tanah_faces = tanah[1];
      var tanahijo =new myObject(tanah_vertex,tanah_faces,shader_vertex_source,shader_fragment_source);

      //========Pohon==============
      var batang_pohon_temp=[];
      batang_pohon_temp = createTabungSectioned(1,15,-2.5,-10,50,0.7,0.5,0.2);
      var batang_pohon_vertex = batang_pohon_temp[0];
      var batang_pohon_faces = batang_pohon_temp[1];
      var batang_pohon = new myObject(batang_pohon_vertex, batang_pohon_faces,shader_vertex_source,shader_fragment_source);

      var daun1_temp=[];
      daun1_temp = createConeSam(3,4,15,1,-10,50,0,1,0);
      var daun1_vertex = daun1_temp[0];
      var daun1_faces = daun1_temp[1];
      var daun1 = new myObject(daun1_vertex, daun1_faces,shader_vertex_source,shader_fragment_source);
      batang_pohon.addchild(daun1)

      var daun2_temp=[];
      daun2_temp = createConeSam(3,4,15,3,-10,50,0,1,0);
      var daun2_vertex = daun2_temp[0];
      var daun2_faces = daun2_temp[1];
      var daun2 = new myObject(daun2_vertex, daun2_faces,shader_vertex_source,shader_fragment_source);
      batang_pohon.addchild(daun2)

      var daun3_temp=[];
      daun3_temp = createConeSam(3,4,15,5,-10,50,0,1,0);
      var daun3_vertex = daun3_temp[0];
      var daun3_faces = daun3_temp[1];
      var daun3 = new myObject(daun3_vertex, daun3_faces,shader_vertex_source,shader_fragment_source);
      batang_pohon.addchild(daun3)
      
      
      var rad3 = 0.38;
      var apel_vertex = [];
      apel_vertex.push(15,1.18,-7.01);
      apel_vertex.push(1,0,0);
      for (let i = 0; i <= 360; i++) {
          apel_vertex.push(15+ rad3 * Math.cos(i/Math.PI));
          apel_vertex.push(1.18 + rad3 * Math.sin(i/Math.PI));
          apel_vertex.push(-7.01);
          apel_vertex.push(1);
          apel_vertex.push(0);
          apel_vertex.push(0);
      }
      var apel_faces = [];
      for (let i = 0; i < 360; i++) {
          apel_faces.push(0,i,i+1);
      }
      var apel = new myObject(apel_vertex, apel_faces, shader_vertex_source, shader_fragment_source);
      batang_pohon.addchild(apel)

      var rad3 = 0.38;
      var apel1_vertex = [];
      apel1_vertex.push(12,1.18,-7.01);
      apel1_vertex.push(1,0,0);
      for (let i = 0; i <= 360; i++) {
          apel1_vertex.push(12+ rad3 * Math.cos(i/Math.PI));
          apel1_vertex.push(1.18 + rad3 * Math.sin(i/Math.PI));
          apel1_vertex.push(-7.01);
          apel1_vertex.push(1);
          apel1_vertex.push(0);
          apel1_vertex.push(0);
      }
      var apel1_faces = [];
      for (let i = 0; i < 360; i++) {
          apel1_faces.push(0,i,i+1);
      }
      var apel1 = new myObject(apel1_vertex, apel1_faces, shader_vertex_source, shader_fragment_source);
      batang_pohon.addchild(apel1)

      var rad3 = 0.38;
      var apel2_vertex = [];
      apel2_vertex.push(13,3,-7.01);
      apel2_vertex.push(1,0,0);
      for (let i = 0; i <= 360; i++) {
          apel2_vertex.push(13+ rad3 * Math.cos(i/Math.PI));
          apel2_vertex.push(3 + rad3 * Math.sin(i/Math.PI));
          apel2_vertex.push(-7.01);
          apel2_vertex.push(1);
          apel2_vertex.push(0);
          apel2_vertex.push(0);
      }
      var apel2_faces = [];
      for (let i = 0; i < 360; i++) {
          apel2_faces.push(0,i,i+1);
      }
      var apel2 = new myObject(apel2_vertex, apel2_faces, shader_vertex_source, shader_fragment_source);
      batang_pohon.addchild(apel2)

      var rad3 = 0.38;
      var apel3_vertex = [];
      apel3_vertex.push(15.5,5,-7.01);
      apel3_vertex.push(1,0,0);
      for (let i = 0; i <= 360; i++) {
          apel3_vertex.push(15.5+ rad3 * Math.cos(i/Math.PI));
          apel3_vertex.push(5 + rad3 * Math.sin(i/Math.PI));
          apel3_vertex.push(-7.01);
          apel3_vertex.push(1);
          apel3_vertex.push(0);
          apel3_vertex.push(0);
      }
      var apel3_faces = [];
      for (let i = 0; i < 360; i++) {
          apel3_faces.push(0,i,i+1);
      }
      var apel3 = new myObject(apel3_vertex, apel3_faces, shader_vertex_source, shader_fragment_source);
      batang_pohon.addchild(apel3)

      var rad3 = 0.38;
      var apel4_vertex = [];
      apel4_vertex.push(14,6,-7.01);
      apel4_vertex.push(1,0,0);
      for (let i = 0; i <= 360; i++) {
          apel4_vertex.push(14+ rad3 * Math.cos(i/Math.PI));
          apel4_vertex.push(6 + rad3 * Math.sin(i/Math.PI));
          apel4_vertex.push(-7.01);
          apel4_vertex.push(1);
          apel4_vertex.push(0);
          apel4_vertex.push(0);
      }
      var apel4_faces = [];
      for (let i = 0; i < 360; i++) {
          apel4_faces.push(0,i,i+1);
      }
      var apel4 = new myObject(apel4_vertex, apel4_faces, shader_vertex_source, shader_fragment_source);
      batang_pohon.addchild(apel4)

      var rumah_temp = [];
      rumah_temp = createRectangularPrism(18, 9, 9, 1, 2, -25, 0.5, 1, -1);
      var rumah_vertex = rumah_temp[0];
      var rumah_faces = rumah_temp[1];
      var rumah = new myObject(rumah_vertex, rumah_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(rumah)

      var jendela_temp = [];
      jendela_temp = createRectangularPrism(3, 3, 1, 6, 2.5, -20, 1, 1, 1);
      var jendela_vertex = jendela_temp[0];
      var jendela_faces = jendela_temp[1];
      var jendela = new myObject(jendela_vertex, jendela_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(jendela)

      var jendela1_temp = [];
      jendela1_temp = createRectangularPrism(3, 0.1, 1, 6, 2.5, -20, 0, 0, 0);
      var jendela1_vertex = jendela1_temp[0];
      var jendela1_faces = jendela1_temp[1];
      var jendela1 = new myObject(jendela1_vertex, jendela1_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(jendela1)

      var jendela2_temp = [];
      jendela2_temp = createRectangularPrism(0.1, 3, 1, 6, 2.5, -20, 0, 0, 0);
      var jendela2_vertex = jendela2_temp[0];
      var jendela2_faces = jendela2_temp[1];
      var jendela2 = new myObject(jendela2_vertex, jendela2_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(jendela2)


      var pintu_temp = [];
      pintu_temp = createRectangularPrism(3, 6, 1, -4, 0, -20, 1, 0.5, 0);
      var pintu_vertex = pintu_temp[0];
      var pintu_faces = pintu_temp[1];
      var pintu = new myObject(pintu_vertex, pintu_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(pintu)

      var pintu2_temp = [];
      pintu2_temp = createRectangularPrism(3, 6, 1, -1, 0, -20, 1, 0.5, 0);
      var pintu2_vertex = pintu2_temp[0];
      var pintu2_faces = pintu2_temp[1];
      var pintu2 = new myObject(pintu2_vertex, pintu2_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(pintu2)

      var pintu3_temp = [];
      pintu3_temp = createRectangularPrism(0.1, 6, 1, -2.5, 0, -20, 0, 0, 0);
      var pintu3_vertex = pintu3_temp[0];
      var pintu3_faces = pintu3_temp[1];
      var pintu3 = new myObject(pintu3_vertex, pintu3_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(pintu3)


      var gagang_temp = [];
      gagang_temp = createEllipsoid(0.15,0.15,0.5,-3,0.4,-19.6,0,0,0);
      var gagang_vertex = gagang_temp[0];
      var gagang_faces = gagang_temp[1];
      var gagang = new myObject(gagang_vertex, gagang_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(gagang)

      var gagang1_temp = [];
      gagang1_temp = createEllipsoid(0.15,0.15,0.5,-2,0.4,-19.6,0,0,0);
      var gagang1_vertex = gagang1_temp[0];
      var gagang1_faces = gagang1_temp[1];
      var gagang1 = new myObject(gagang1_vertex, gagang1_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(gagang1)

      var piramid_temp = [];
      var piramid_temp = createPyramid(20, 10, 1, 10, -25,0, 0.5, 1);
      var piramid_vertex = piramid_temp[0];
      var piramid_faces = piramid_temp[1];
      var piramid = new myObject(piramid_vertex, piramid_faces, shader_vertex_source, shader_fragment_source);
      tanahijo.addchild(piramid);

      var awan1_temp = [];
      awan1_temp = createEllipsoid(2.8,2.5,3,-20,16,-25,0.9,0.9,0.9);
      var awan1_vertex = awan1_temp[0];
      var awan1_faces = awan1_temp[1];
      var awan1 = new myObject(awan1_vertex, awan1_faces, shader_vertex_source, shader_fragment_source);

      
      var awan2_temp = [];
      awan2_temp = createEllipsoid(2.8,2.5,3,-25,16,-25,0.9,0.9,0.9);
      var awan2_vertex = awan2_temp[0];
      var awan2_faces = awan2_temp[1];
      var awan2 = new myObject(awan2_vertex, awan2_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan2);

      var awan3_temp = [];
      awan3_temp = createEllipsoid(2.8,2.5,3,-15,16,-25,0.9,0.9,0.9);
      var awan3_vertex = awan3_temp[0];
      var awan3_faces = awan3_temp[1];
      var awan3 = new myObject(awan3_vertex, awan3_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan3);

      var awan4_temp = [];
      awan4_temp = createEllipsoid(2.8,2.5,3,-23,20,-25,0.9,0.9,0.9);
      var awan4_vertex = awan4_temp[0];
      var awan4_faces = awan4_temp[1];
      var awan4 = new myObject(awan4_vertex, awan4_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan4);

      var awan5_temp = [];
      awan5_temp = createEllipsoid(2.8,2.5,3,-18,20,-25,0.9,0.9,0.9);
      var awan5_vertex = awan5_temp[0];
      var awan5_faces = awan5_temp[1];
      var awan5 = new myObject(awan5_vertex, awan5_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan5);

      var awan6_temp = [];
      awan6_temp = createEllipsoid(2.8,2.5,3,-14,19,-25,0.9,0.9,0.9);
      var awan6_vertex = awan6_temp[0];
      var awan6_faces = awan6_temp[1];
      var awan6 = new myObject(awan6_vertex, awan6_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan6);

      var awan7_temp = [];
      awan7_temp = createEllipsoid(2.8,2.5,3,-26,19,-25,0.9,0.9,0.9);
      var awan7_vertex = awan7_temp[0];
      var awan7_faces = awan7_temp[1];
      var awan7 = new myObject(awan7_vertex, awan7_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(awan7);

  
      var bulan_temp = [];
      bulan_temp = createEllipsoid(3,3,3,18,19,-25,1,1,0);
      var bulan_vertex = bulan_temp[0];
      var bulan_faces = bulan_temp[1];
      var bulan = new myObject(bulan_vertex, bulan_faces, shader_vertex_source, shader_fragment_source);
      awan1.addchild(bulan);

      var bench1_temp = [];
      bench1_temp = createRectangularPrism(6, 0.2, 1, 6, -0.5, -17, 0.7, 0.5, 0.2);
      var bench1_vertex = bench1_temp[0];
      var bench1_faces = bench1_temp[1];
      var bench1 = new myObject(bench1_vertex, bench1_faces, shader_vertex_source, shader_fragment_source);

      var bench2_temp = [];
      bench2_temp = createRectangularPrism(6, 1.2, 0.2, 6, 0, -18, 0.7, 0.5, 0.2);
      var bench2_vertex = bench2_temp[0];
      var bench2_faces = bench2_temp[1];
      var bench2 = new myObject(bench2_vertex, bench2_faces, shader_vertex_source, shader_fragment_source);
      bench1.addchild(bench2)

      var bench3_temp = [];
      bench3_temp = createTabungSectioned(0.1, 3.5, -2.3, -17, 18, 0, 0, 0);
      var bench3_vertex = bench3_temp[0];
      var bench3_faces = bench3_temp[1];
      var bench3 = new myObject(bench3_vertex, bench3_faces, shader_vertex_source, shader_fragment_source);
      bench1.addchild(bench3)

      var bench4_temp = [];
      bench4_temp = createTabungSectioned(0.1, 8.5, -2.3, -17, 18, 0, 0, 0);
      var bench4_vertex = bench4_temp[0];
      var bench4_faces = bench4_temp[1];
      var bench4 = new myObject(bench4_vertex, bench4_faces, shader_vertex_source, shader_fragment_source);
      bench1.addchild(bench4)


      //MATRIX
      var PROJMATRIX = LIBS.get_projection(40,CANVAS.width/CANVAS.height,1,100);
      var VIEWMATRIX = LIBS.get_I4();


      LIBS.translateZ(VIEWMATRIX,-30);
      var THETA=0, PHI=0;

      //==================================DRAWING==================================
      GL.clearColor(0.0,0.0,0.0,0.0);
      GL.enable(GL.DEPTH_TEST);
      GL.depthFunc(GL.LEQUAL);
      GL.clearDepth(1.0);
      
      var animate = function(time) {
        
          if(time > 0) {
              var dt = (time - time_prev);
              if(!drag){
                  dX *= AMORTIZATION;
                  dY *= AMORTIZATION;
                  THETA += dX;
                  PHI += dY;
              }

              LIBS.rotateY(char1.MOVEMATRIX, LIBS.degToRad(dt * 0.1));
              char1.MOVEMATRIX = glMatrix.mat4.create();
              char1.child[0].MOVEMATRIX = glMatrix.mat4.create();
              LIBS.set_I4(char1.MOVEMATRIX);
              temp =LIBS.get_I4();
              LIBS.translateX(temp,0);
              char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);

              for(let i = 0;i<char1.child.length;i++){
                  LIBS.set_I4(char1.child[i].MOVEMATRIX);
                  temp =LIBS.get_I4();
                  LIBS.translateX(temp,0);
                  char1.child[i].MOVEMATRIX = LIBS.mul(char1.child[i].MOVEMATRIX, temp);
                }

                if(time <=960){
                  if(time  > 600){
                      
                      LIBS.set_I4(char1.MOVEMATRIX);
                      temp = LIBS.get_I4();
                      LIBS.translateX(temp,0);
                      LIBS.translateY(temp,(500*0.0095)+time*-0.005);
                      char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);
                      for(let i = 0; i<char1.child.length;i++){
                          LIBS.set_I4(char1.child[i].MOVEMATRIX);
                          temp = LIBS.get_I4();
                          LIBS.translateX(temp,0);
                          LIBS.translateY(temp,(500*0.0095)+time*-0.005);
                          char1.child[i].MOVEMATRIX = LIBS.mul(char1.child[i].MOVEMATRIX, temp);
                      }

                  }else{
                    
                      LIBS.set_I4(char1.MOVEMATRIX);
                      temp = LIBS.get_I4();
                      LIBS.translateX(temp,0);
                      LIBS.translateY(temp,time*0.005);
                      char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);
                      for(let i = 0; i<char1.child.length;i++){
                          LIBS.set_I4(char1.child[i].MOVEMATRIX);
                          temp = LIBS.get_I4();
                          LIBS.translateX(temp,0);
                          LIBS.translateY(temp,time*0.005);
                          char1.child[i].MOVEMATRIX = LIBS.mul(char1.child[i].MOVEMATRIX, temp);
                      }

                      LIBS.set_I4(char1.child[14].MOVEMATRIX);
                      temp = LIBS.get_I4();
                      LIBS.translateX(temp,0);
                      LIBS.translateY(temp,time*0.0025);
                      LIBS.rotateZ(temp,LIBS.degToRad(time * 0.20));
                      char1.child[14].MOVEMATRIX = LIBS.mul(char1.child[14].MOVEMATRIX, temp);
                      
                      LIBS.set_I4(char1.child[15].MOVEMATRIX);
                      temp = LIBS.get_I4();
                      LIBS.translateX(temp,0);
                      LIBS.translateY(temp,time*0.0025);
                      LIBS.rotateZ(temp,LIBS.degToRad(time * -0.20));
                      char1.child[15].MOVEMATRIX = LIBS.mul(char1.child[15].MOVEMATRIX, temp);
                  }
              }else {
                
                  LIBS.set_I4(char1.MOVEMATRIX);
                  temp = LIBS.get_I4();
                  LIBS.translateX(temp,0);
                  LIBS.translateY(temp,0);
                  char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);
              }

              if(time<1500+600&& time>1500){
                LIBS.translateY(VIEWMATRIX,time*-0.00001);
                
            }
            if(time>1500+700&&time<4000+400){
                LIBS.translateZ(VIEWMATRIX,time*0.000011);
            }
            if(time>4000+1000&&time<4750+900){
                LIBS.translateX(VIEWMATRIX,time*0.000011)
            }

            if(time>4750+1300&&time<5400+1200){
                LIBS.translateX(VIEWMATRIX,time*-0.000011)
            }
            if(time>5400+1800&&time<6350+1300){
                LIBS.translateX(VIEWMATRIX,time*-0.000011)
            }
            // Animate the moon
            char1.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char1.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);

            char2.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char2.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char2.MOVEMATRIX = LIBS.mul(char2.MOVEMATRIX, temp);

            char3.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char3.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char3.MOVEMATRIX = LIBS.mul(char3.MOVEMATRIX, temp);

            char4.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char4.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char4.MOVEMATRIX = LIBS.mul(char4.MOVEMATRIX, temp);

            char5.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char5.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char5.MOVEMATRIX = LIBS.mul(char5.MOVEMATRIX, temp);

            char6.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char6.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char6.MOVEMATRIX = LIBS.mul(char6.MOVEMATRIX, temp);

            char7.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char7.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char7.MOVEMATRIX = LIBS.mul(char7.MOVEMATRIX, temp);

            char8.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char8.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char8.MOVEMATRIX = LIBS.mul(char8.MOVEMATRIX, temp);

            char9.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char9.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char9.MOVEMATRIX = LIBS.mul(char9.MOVEMATRIX, temp);

            char10.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char10.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char10.MOVEMATRIX = LIBS.mul(char10.MOVEMATRIX, temp);

            char11.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char11.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char11.MOVEMATRIX = LIBS.mul(char11.MOVEMATRIX, temp);

            char12.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char12.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char12.MOVEMATRIX = LIBS.mul(char12.MOVEMATRIX, temp);

            char13.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char13.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char13.MOVEMATRIX = LIBS.mul(char13.MOVEMATRIX, temp);

            char14.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char14.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char14.MOVEMATRIX = LIBS.mul(char14.MOVEMATRIX, temp);

            char15.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char15.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char15.MOVEMATRIX = LIBS.mul(char15.MOVEMATRIX, temp);

            char16.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char16.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char16.MOVEMATRIX = LIBS.mul(char16.MOVEMATRIX, temp);

            char17.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char17.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char17.MOVEMATRIX = LIBS.mul(char17.MOVEMATRIX, temp);

            char18.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char18.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char18.MOVEMATRIX = LIBS.mul(char18.MOVEMATRIX, temp);

            char19.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char19.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char19.MOVEMATRIX = LIBS.mul(char19.MOVEMATRIX, temp);

            char20.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char20.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char20.MOVEMATRIX = LIBS.mul(char20.MOVEMATRIX, temp);

            char21.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(char21.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 1); // move the clouds horizontally
            char21.MOVEMATRIX = LIBS.mul(char21.MOVEMATRIX, temp);


            apel4.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(apel4.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateY(temp, Math.cos(time * 0.0007) * 2); // move the clouds vertically
            apel4.MOVEMATRIX = LIBS.mul(apel4.MOVEMATRIX, temp);
          // Animate the moon
            bulan.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(bulan.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.002) * 0.5); // move the clouds horizontally
            LIBS.translateY(temp, Math.cos(time * 0.0007) * 40); // move the clouds vertically
            bulan.MOVEMATRIX = LIBS.mul(bulan.MOVEMATRIX, temp);
            // Animate the clouds
            awan1.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan1.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan1.MOVEMATRIX = LIBS.mul(awan1.MOVEMATRIX, temp);

            awan2.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan2.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan1.MOVEMATRIX = LIBS.mul(awan2.MOVEMATRIX, temp);

            awan3.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan3.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan3.MOVEMATRIX = LIBS.mul(awan3.MOVEMATRIX, temp);

            awan4.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan4.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan4.MOVEMATRIX = LIBS.mul(awan4.MOVEMATRIX, temp);

            awan5.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan5.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan5.MOVEMATRIX = LIBS.mul(awan5.MOVEMATRIX, temp);

            awan6.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan6.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan6.MOVEMATRIX = LIBS.mul(awan6.MOVEMATRIX, temp);

            awan7.MOVEMATRIX = glMatrix.mat4.create();
            LIBS.set_I4(awan7.MOVEMATRIX);
            temp = LIBS.get_I4();
            LIBS.translateX(temp, Math.sin(time * 0.0005) * 20); // move the moon horizontally with a shorter distance
            awan7.MOVEMATRIX = LIBS.mul(awan7.MOVEMATRIX, temp);


              
          
          
          GL.viewport(0,0,CANVAS.width,CANVAS.height);
          GL.clear(GL.COLOR_BUFFER_BIT | GL.D_BUFFER_BIT);

          tanahijo.setUniform4(PROJMATRIX,VIEWMATRIX);
          char1.setUniform4(PROJMATRIX,VIEWMATRIX);
          batang_pohon.setUniform4(PROJMATRIX,VIEWMATRIX);
          awan1.setUniform4(PROJMATRIX,VIEWMATRIX);
          bench1.setUniform4(PROJMATRIX,VIEWMATRIX);
          bulan.setUniform4(PROJMATRIX, VIEWMATRIX);
          awan1.setUniform4(PROJMATRIX, VIEWMATRIX);



          for(let i = 0;i<char1.child.length;i++){
              char1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
          }

          for(let i = 0;i<batang_pohon.child.length;i++){
              batang_pohon.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
          }
          for(let i = 0;i<tanahijo.child.length;i++){
              tanahijo.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
          }
  
          for(let i = 0;i<awan1.child.length;i++){
              awan1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
          }

          for(let i = 0;i<bench1.child.length;i++){
              bench1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
          }
          
        
         
          char1.draw();
          tanahijo.draw();
          batang_pohon.draw();
          awan1.draw();
          bench1.draw();
          bulan.draw();
 
          
         
          var time_prev = 0;
          // Rotasi berdasarkan input keyboard
LIBS.rotateY(char1.MOVEMATRIX, LIBS.degToRad(dt * THETA));
char1.MOVEMATRIX = glMatrix.mat4.create();
LIBS.set_I4(char1.MOVEMATRIX);
temp = LIBS.get_I4();
LIBS.translateX(temp, 0);
char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);

for (let i = 0; i < char1.child.length; i++) {
    LIBS.set_I4(char1.child[i].MOVEMATRIX);
    temp = LIBS.get_I4();
    LIBS.translateX(temp, 0);
    char1.child[i].MOVEMATRIX = LIBS.mul(char1.child[i].MOVEMATRIX, temp);
}

LIBS.translateY(temp, time * 0.005 + PHI);
char1.MOVEMATRIX = LIBS.mul(char1.MOVEMATRIX, temp);

for (let i = 0; i < char1.child.length; i++) {
    char1.child[i].MOVEMATRIX = LIBS.mul(char1.child[i].MOVEMATRIX, temp);
}
      }
      GL.flush();
      window.requestAnimationFrame(animate);
    }


      animate();


  }
window.addEventListener('load',main);








