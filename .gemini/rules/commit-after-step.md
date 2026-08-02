---
name: commit-after-step
description: Regla de comportamiento para recordar siempre hacer un commit al finalizar un paso de desarrollo.
---

# Regla: Commit Atómico por Paso

Cuando estés guiando al usuario paso a paso (Tutorial Mode) o completando tareas de un Roadmap:
1. Al finalizar y validar un paso, **ANTES** de darle las instrucciones del siguiente paso, debes recordarle y pedirle que haga un `git commit` con los cambios de ese paso.
2. Sugiere un mensaje de commit descriptivo basado en lo que se acaba de construir (ej. `feat: implementado componente Clients`).
3. Espera a que el usuario confirme que ha hecho el commit antes de avanzar al siguiente paso.
