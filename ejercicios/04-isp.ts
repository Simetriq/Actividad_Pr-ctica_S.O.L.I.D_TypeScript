interface MultifunctionPrinter {
}

interface Printer {
  print(document: string): void;
};

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }

  scan(_document: string): void {
    throw new Error("Esta impresora no puede escanear");
  }

  fax(_document: string): void {
    throw new Error("Esta impresora no puede enviar fax");
  }
}

new SimplePrinter().print("tarea.txt");
