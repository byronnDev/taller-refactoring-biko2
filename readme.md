# Refactorización en Desarrollo de Software

La **refactorización** es una técnica en el desarrollo de software que busca mejorar el código sin alterar su funcionalidad.

## Beneficios:

- Menos riesgo al modificar el código.
- Mejor comprensión del código.
- Menor costo al modificar o añadir funcionalidades.

## ¿Cuándo aplicamos la refactorización?

- Al modificar un trozo de código.
  - Por ejemplo, al resolver un bug.
- Al añadir nuevas funcionalidades.
  - Por ejemplo, al abstraer un método para evitar duplicación.
- Puede ser abordada como una tareas
  - Una dinámicas de equipo, sacar tareas de refactors(normalmente suelen ser grandes) y priorizar por impacto.

## ¿Por qué surge la necesidad de refactorizar?

- Desarrollo apresurado para poner en producción.
- Poca inversión en el software.
- Falta de familiaridad con código limpio.
- La perfección no se logra en el primer intento.
- Deuda técnica.
- Diseño deficiente del software.

## ¿Cómo atacamos la refactorización?

1. **Analizar e identificar:**

   - Identificar oportunidades de mejora.
   - Analizar code smells.

2. **Plantear solución:**

   - Nombres descriptivos.
   - Evitar code smells.

3. **Pequeños pasos:**

   - Evitar cambios grandes para reducir riesgos.
   - No modificar la funcionalidad.
   - Agregar tests si no existen.

4. **Código refactorizable:**

   - **Naming:**

     - Usar nombres descriptivos.
     - Evitar nombres genéricos.

   - **Code smells:**

     - Evitar variables globales.
     - Mantener nombres consistentes.
     - Evitar números mágicos.
     - Eliminar código no utilizado.

   - **Keep it simple & you aren’t gonna need it:**

     - Mantener el código simple.
     - Evitar programar por anticipado.

   - **Principio de Single Responsability:**

     - Cada función debe tener una única responsabilidad.

   - **Consolidación de duplicados (Regla de 3 strikes):**

     - Contar hasta 3 antes de extraer código duplicado.

   - **Reorganización de parámetros de funciones:**

     - Considerar objetos de configuración.
     - Usar destructuring para manejar múltiples parámetros.

   - **Regla de los scout:**
     - Dejar el código más limpio de lo encontrado.

## Testeo en Desarrollo de Software

**¿Qué es un test?**
Un test es un bloque de código que valida automáticamente el funcionamiento correcto de otra sección de código.

**Principales ventajas de testear software:**

- Mantenimiento del código.
- Detección de errores en cambios recientes.
- Reducción del tiempo entre cambios.
- Reproducción de escenarios específicos.

**Principales tipos de test:**

1. Test unitarios.
2. Test de integración.
3. Test end to end.

**Test unitario:**

- Prueban la parte más pequeña del software.
- Estructura AAA (Arrange-Act-Assert).
  - Arrange: Preparación del test.
  - Act: Ejecución del test.
  - Assert: Evaluación de resultados.

**¿Qué es clave tener en cuenta en un test unitario?**

- Prueba una única funcionalidad.
- Trata el código como una caja negra.
- Tan importantes como el código de producción.
- Utiliza nombres descriptivos relacionados con el dominio.

---

## Bibliografía complementaria:

- Martin, R. C. (2008). Clean Code: A Handbook of Agile Software Craftsmanship.
- Carlos Blé. (2022). Código sostenible: Cómo programar código fácil de mantener.
- Fowler, M. (1999). Refactoring: Improving the Design of Existing Code.
