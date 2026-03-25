# REGLAS DE ORO DEL SISTEMA (Antigravity)

Todos los modelos de Inteligencia Artificial que operen en este proyecto DEBEN seguir OBLIGATORIAMENTE las siguientes reglas sin excepción alguna.

## 1. Framework y Librerías
Este proyecto se rige por versiones estrictas de sus dependencias base. No asumas ni incluyas versiones superiores o inferiores, y prioriza siempre las APIs de estas versiones:
- **animejs:** 4.3.6
- **lucide-react:** 0.577.0
- **next:** 16.2.0
- **react:** 19.2.4
- **react-dom:** 19.2.4

*Regla: No introducir versiones diferentes ni instalar librerías equivalentes ajenas (ej. framer-motion en vez de animejs) sin autorización expresa del usuario.*

## 2. Directrices de Resolución y Documentación
- **Fuentes Oficiales:** Utilizar SIEMPRE la documentación oficial y/o fuentes certificadas verificadas antes de sugerir código (particularmente para resolver configuraciones de Next 15+ o APIs de React 19).
- **Buenas Costumbres:** Siempre seguir las buenas prácticas de la programación (Código limpio, DRY, modularidad, nombrar variables en inglés de manera descriptiva, y manejo correcto de errores).
- **Ausencia de Solución Documentada:** En el caso de que la documentación no proporcione solución, **NO ALUCINAR (no inventar APIs o métodos inexistentes)**. Informar claramente al usuario del bloqueo tecnológico, aplicar razonamiento lógico y proponer el mejor *workaround* posible o buscar una alternativa justificada.

## 3. Reglas Adicionales (Mejores Prácticas del Modelo)
- **Tipado Estricto Obligatorio:** Todo componente y función debe estar tipado mediante TypeScript de manera rigurosa. El uso de la palabra clave `any` está estrictamente prohibido a menos que el usuario indique lo contrario.
- **Diseño UI:** Todos los estilos deben mantener la armonía (Mobile First, accesibilidad, diseño responsivo).
- **Concisión:** El modelo debe dar respuestas compactas y directas al punto. Proporcionar el código útil y, si es necesaria una explicación, hacerla o mediante comentarios cortos en el archivo o en viñetas puntuales.
- **Validar antes de Destruir:** Nunca refactorizar o sobrescribir de manera masiva código sin antes haber leído el archivo correspondiente (usando las herramientas de lectura de archivos). 

## 4. Convenciones de Control de Versiones (Git)
**Formato estándar (Conventional Commits):**
`<type>(<scope>): <subject>`

- **type:** Indica el tipo de cambio. Ejemplos:
  - `feat`: Nueva funcionalidad.
  - `fix`: Corrección de bug.
  - `docs`: Cambios en documentación.
  - `style`: Cambios de estilo (espacios, indentación).
  - `refactor`: Refactorización sin cambios de comportamiento.
  - `test`: Añadir o corregir pruebas.
  - `chore`: Mantenimiento (actualización de dependencias, etc.).

- **scope:** Opcional. Describe la parte del código afectada (ej: auth, ui, api).
- **subject:** Breve descripción en imperativo, presente, sin punto final y con primera letra mayúscula. 

- *Ejemplo:* `feat(auth): Se añadió el inicio de sesión con Google`

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
