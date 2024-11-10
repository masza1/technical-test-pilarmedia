const OOPArticle = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Object-Oriented Programming (OOP) dalam JavaScript</h1>
      <p className="text-lg text-gray-700 mb-4">
        Pemrograman Berorientasi Objek (OOP) adalah paradigma pemrograman yang mengorganisir kode dalam bentuk objek. Objek ini
        memiliki data (disebut atribut) dan metode (fungsi yang beroperasi pada data). OOP membantu mengorganisir kode untuk
        membuatnya lebih modular, mudah dipelihara, dan dapat diperluas.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Encapsulation (Enkapsulasi)</h2>
      <p className="text-lg text-gray-700 mb-4">
        Enkapsulasi adalah konsep untuk menyembunyikan detail implementasi dari objek dan hanya mengekspos fungsionalitas
        yang diperlukan kepada pengguna objek tersebut. Ini membantu melindungi data dari akses langsung dan memungkinkan
        kontrol lebih besar atas bagaimana data digunakan.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Contoh: Kita memiliki objek <strong>Animal</strong> yang hanya mengizinkan perubahan pada nama hewan melalui
        metode tertentu.
      </p>

      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          { `class Animal {
  constructor(name) {
    this.name = name;
  }

  // Getter
  getName() {
    return this.name;
  }

  // Setter
  setName(name) {
    this.name = name;
  }
}

const lion = new Animal("Lion");
console.log(lion.getName()); // Output: Lion

lion.setName("Tiger");
console.log(lion.getName()); // Output: Tiger`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Polymorphism (Polimorfisme)</h2>
      <p className="text-lg text-gray-700 mb-4">
        Polimorfisme adalah kemampuan objek untuk mengambil banyak bentuk. Dalam OOP, ini berarti objek dapat memiliki
        metode yang sama tetapi implementasi yang berbeda. Konsep ini memungkinkan kita untuk menggunakan metode yang
        sama pada objek yang berbeda dengan cara yang disesuaikan.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Contoh: Kita akan membuat dua jenis hewan, <strong>Dog</strong> dan <strong>Cat</strong>, yang keduanya memiliki
        metode <strong>makeSound()</strong>, tetapi dengan implementasi yang berbeda.
      </p>

      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          { `class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Output: Bark
cat.makeSound(); // Output: Meow`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Inheritance (Pewarisan)</h2>
      <p className="text-lg text-gray-700 mb-4">
        Pewarisan memungkinkan satu kelas untuk mewarisi properti dan metode dari kelas lain. Ini memungkinkan kita untuk
        membuat kelas baru dengan fungsionalitas yang ada tanpa perlu menulis ulang kode yang sama.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Contoh: Kelas <strong>Dog</strong> mewarisi kelas <strong>Animal</strong> dan menambahkan fungsionalitas baru,
        seperti metode <strong>bark()</strong>.
      </p>

      <pre className="bg-gray-100 p-4 rounded-md">
        <code>
          { `class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name); // Output: Buddy
console.log(dog.breed); // Output: Golden Retriever
dog.makeSound(); // Output: Some generic animal sound
dog.bark(); // Output: Woof! Woof!`}
        </code>
      </pre>

      <p className="text-lg text-gray-700 mt-6">
        Dengan konsep OOP, kita dapat mengorganisir kode dengan lebih baik, memungkinkan reuse dan pemeliharaan yang lebih
        mudah. Ketiga konsep ini, Enkapsulasi, Polimorfisme, dan Pewarisan, adalah pilar dasar dari OOP yang sangat berguna
        dalam pengembangan perangkat lunak yang lebih kompleks.
      </p>
    </div>
  );
};

export default OOPArticle;
