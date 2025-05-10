# Pokedex

## 🔧 Tecnologías y dependencias

- **Framework**: Angular 19  
- **Lenguaje**: TypeScript  
- **Estilos**: SCSS (módulos por componente)  
- **API externa**: [PokeAPI](https://pokeapi.co/)  
- **Standalone Components**: Uso de `standalone: true` y `imports` en componentes hijos  
- **Gestión de datos**: Servicio `PokemonService` con `fetch`, tipado de respuestas e interceptación de errores  

---

## 🚀 Instalación y puesta en marcha

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/usuario/proyecto-pokemon.git
   cd proyecto-pokemon
   ```

1. **Instalar dependencias**  
   ```bash
    npm install

   ```
1. **Correr el proyecto**  
   ```bash
   npm start
   ```

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/usuario/proyecto-pokemon.git
   cd proyecto-pokemon
   ```

⚙️ Personalización
 - Número de ítems por página: modifica los parámetros limit y offset en getByPage().

 - Umbral de scroll: ajusta el porcentaje (actualmente 90%) que dispara la carga de más ítems.

