const DATA = [
    { symbol: "+", name: "Suma", usage: "Adición de números", example: "3 + 2 = 5", category: "Basico" },
    { symbol: "−", name: "Resta", usage: "Sustracción de números", example: "7 − 4 = 3", category: "Basico" },
    { symbol: "±", name: "Más/menos", usage: "Indica dos posibilidades (positivo o negativo)", example: "x = ±2", category: "Basico" },
    { symbol: "∓", name: "Menos/más", usage: "Opuesto de ±", example: "a ∓ b", category: "Basico" },
    { symbol: "× / ·", name: "Multiplicación", usage: "Producto de números", example: "5 × 6 = 30", category: "Basico" },
    { symbol: "÷ / /", name: "División", usage: "Cociente entre números", example: "12 ÷ 3 = 4", category: "Basico" },
    { symbol: "=", name: "Igual", usage: "Indica equivalencia", example: "2+3 = 5", category: "Basico" },
    { symbol: "≠", name: "Distinto", usage: "Indica desigualdad", example: "7 ≠ 5", category: "Basico" },
    { symbol: "<", name: "Menor que", usage: "Comparación", example: "3 < 4", category: "Basico" },
    { symbol: ">", name: "Mayor que", usage: "Comparación", example: "5 > 2", category: "Basico" },
    { symbol: "≤", name: "Menor o igual", usage: "Comparación", example: "x ≤ 7", category: "Basico" },
    { symbol: "≥", name: "Mayor o igual", usage: "Comparación", example: "y ≥ 0", category: "Basico" },
    { symbol: "≈", name: "Aproximadamente", usage: "Igualdad aproximada", example: "π ≈ 3.14", category: "Basico" },
    { symbol: "∝", name: "Proporcional", usage: "Relación de proporcionalidad", example: "y ∝ x²", category: "Álgebra" },
    { symbol: "%", name: "Porcentaje", usage: "Parte de 100", example: "20% = 20/100", category: "Basico" },
    { symbol: "√", name: "Raíz cuadrada", usage: "Inversa de un cuadrado", example: "√9 = 3", category: "Basico" },
    { symbol: "ⁿ√", name: "Raíz enésima", usage: "Inversa de potencia", example: "³√8 = 2", category: "Basico" },
    { symbol: "^", name: "Potencia", usage: "Elevación a exponente", example: "2^3 = 8", category: "Álgebra" },
    { symbol: "log", name: "Logaritmo", usage: "Inversa de potencia", example: "log₂(8)=3", category: "Álgebra" },
    { symbol: "ln", name: "Logaritmo natural", usage: "Logaritmo base e", example: "ln(e)=1", category: "Álgebra" },
    { symbol: "e", name: "Constante de Euler", usage: "Base de logaritmos naturales", example: "e^iπ+1=0", category: "Constantes y Física" },
    { symbol: "π", name: "Pi", usage: "Relación circunferencia/diámetro", example: "Área=πr²", category: "Constantes y Física" },
    { symbol: "i", name: "Unidad imaginaria", usage: "Raíz cuadrada de -1", example: "i² = -1", category: "Álgebra compleja" },
    { symbol: "ℕ", name: "Naturales", usage: "Conjunto {1,2,3…}", example: "n ∈ ℕ", category: "Conjuntos" },
    { symbol: "ℤ", name: "Enteros", usage: "Conjunto {...,-2,-1,0,1,2…}", example: "-3 ∈ ℤ", category: "Conjuntos" },
    { symbol: "ℚ", name: "Racionales", usage: "Fracciones", example: "2/3 ∈ ℚ", category: "Conjuntos" },
    { symbol: "ℝ", name: "Reales", usage: "Números reales", example: "√2 ∈ ℝ", category: "Conjuntos" },
    { symbol: "ℂ", name: "Complejos", usage: "Reales + imaginarios", example: "3+2i ∈ ℂ", category: "Conjuntos" },
    { symbol: "∞", name: "Infinito", usage: "Cantidad sin límite", example: "lim 1/x → 0, x→∞", category: "Cálculo" },
    { symbol: "∑", name: "Sumatoria", usage: "Suma de términos", example: "∑(i=1→5) i=15", category: "Cálculo" },
    { symbol: "∏", name: "Productoria", usage: "Producto de términos", example: "∏(i=1→3) i=6", category: "Cálculo" },
    { symbol: "∫", name: "Integral", usage: "Área bajo curva", example: "∫ x dx = x²/2", category: "Cálculo" },
    { symbol: "∂", name: "Derivada parcial", usage: "Cambio en funciones multivariables", example: "∂f/∂x", category: "Cálculo" },
    { symbol: "∇", name: "Nabla", usage: "Gradiente, divergencia o rotacional", example: "∇f", category: "Cálculo" },
    { symbol: "lim", name: "Límite", usage: "Valor al aproximarse", example: "lim x→0 sinx/x=1", category: "Cálculo" },
    { symbol: "∠", name: "Ángulo", usage: "Medida angular", example: "∠ABC=90°", category: "Geometría" },
    { symbol: "⊥", name: "Perpendicular / Ortogonalidad", usage: "Relación de 90° o productos escalares cero", example: "AB ⊥ CD", category: "Geometría/Álgebra" },
    { symbol: "∥", name: "Paralelo", usage: "Rectas paralelas", example: "AB ∥ CD", category: "Geometría" },
    { symbol: "△", name: "Triángulo", usage: "Figura geométrica", example: "△ABC", category: "Geometría" },
    { symbol: "∆", name: "Delta", usage: "Diferencia o variación", example: "∆y/∆x", category: "Álgebra" },
    { symbol: "θ", name: "Theta", usage: "Ángulo", example: "θ=45°", category: "Geometría" },
    { symbol: "φ", name: "Phi", usage: "Número áureo o ángulo", example: "φ≈1.618", category: "Constantes y Física" },
    { symbol: "sin", name: "Seno", usage: "Relación trigonométrica", example: "sin(π/2)=1", category: "Trigonometría" },
    { symbol: "cos", name: "Coseno", usage: "Relación trigonométrica", example: "cos(0)=1", category: "Trigonometría" },
    { symbol: "tan", name: "Tangente", usage: "Relación trigonométrica", example: "tan(π/4)=1", category: "Trigonometría" },
    { symbol: "∈", name: "Pertenencia", usage: "Elemento pertenece a conjunto", example: "3 ∈ A", category: "Conjuntos" },
    { symbol: "∉", name: "No pertenencia", usage: "Elemento no pertenece a conjunto", example: "5 ∉ B", category: "Conjuntos" },
    { symbol: "⊂", name: "Subconjunto", usage: "Incluido estrictamente", example: "A⊂B", category: "Conjuntos" },
    { symbol: "⊆", name: "Subconjunto o igual", usage: "Inclusión amplia", example: "A⊆B", category: "Conjuntos" },
    { symbol: "∪", name: "Unión", usage: "Elementos de ambos conjuntos", example: "A∪B", category: "Conjuntos" },
    { symbol: "∩", name: "Intersección", usage: "Elementos comunes", example: "A∩B", category: "Conjuntos" },
    { symbol: "∅", name: "Conjunto vacío", usage: "Sin elementos", example: "A∩B=∅", category: "Conjuntos" },
    { symbol: "P(A)", name: "Probabilidad", usage: "Medida de probabilidad", example: "P(A)=0.3", category: "Probabilidad" },
    { symbol: "E[X]", name: "Esperanza", usage: "Valor esperado", example: "E[X]=μ", category: "Probabilidad" },
    { symbol: "Var(X)", name: "Varianza", usage: "Medida de dispersión", example: "Var(X)=σ²", category: "Probabilidad" },
    { symbol: "σ", name: "Sigma", usage: "Desviación estándar", example: "σ=√Var(X)", category: "Probabilidad" },
    { symbol: "μ", name: "Mu", usage: "Media de una distribución", example: "μ=E[X]", category: "Probabilidad" },
    { symbol: "⇒", name: "Implica", usage: "Implicación lógica", example: "p⇒q", category: "Lógica" },
    { symbol: "⇔", name: "Si y solo si", usage: "Equivalencia lógica", example: "p⇔q", category: "Lógica" },
    { symbol: "¬", name: "Negación", usage: "Negación lógica", example: "¬p", category: "Lógica" },
    { symbol: "∧", name: "Conjunción", usage: "Lógica (y)", example: "p∧q", category: "Lógica" },
    { symbol: "∨", name: "Disyunción", usage: "Lógica (o)", example: "p∨q", category: "Lógica" },
    { symbol: "∀", name: "Para todo", usage: "Cuantificador universal", example: "∀x∈ℝ", category: "Lógica" },
    { symbol: "∃", name: "Existe", usage: "Cuantificador existencial", example: "∃x: x²=4", category: "Lógica" },
    { symbol: "∄", name: "No existe", usage: "Negación existencial", example: "∄x: x²=-1", category: "Lógica" },
    { symbol: "↦", name: "Mapeo", usage: "Definición de funciones", example: "x↦x²", category: "Álgebra" },
    { symbol: "f(x)", name: "Función", usage: "Relación entre variables", example: "f(x)=x²", category: "Álgebra" },
    { symbol: "∘", name: "Composición", usage: "Composición de funciones", example: "(f∘g)(x)=f(g(x))", category: "Álgebra" },
    { symbol: "det(A)", name: "Determinante", usage: "Escalar asociado a una matriz", example: "det([[1,2],[3,4]])=-2", category: "Álgebra lineal" },
    { symbol: "rank(A)", name: "Rango", usage: "Dimensiones linealmente independientes", example: "rank(A)=2", category: "Álgebra lineal" },
    { symbol: "Aᵀ", name: "Matriz transpuesta", usage: "Intercambio filas ↔ columnas", example: "Aᵀ", category: "Álgebra lineal" },
    { symbol: "⊗", name: "Producto tensorial", usage: "Operación entre tensores", example: "A⊗B", category: "Álgebra lineal" },
    { symbol: "⊕", name: "Suma directa / XOR", usage: "Combinación de espacios vectoriales o disyunción exclusiva", example: "V⊕W", category: "Álgebra lineal/Lógica" },
    { symbol: "λ", name: "Lambda", usage: "Autovalores", example: "Ax=λx", category: "Álgebra lineal" },
    { symbol: "→", name: "Flecha", usage: "Vector o dirección", example: "v→", category: "Álgebra lineal/Vectores" },
    { symbol: "↔", name: "Doble flecha", usage: "Equilibrio / bidireccional", example: "A↔B", category: "Lógica" },
    { symbol: "|x|", name: "Valor absoluto", usage: "Distancia a 0", example: "|−3|=3", category: "Álgebra" },
    { symbol: "||v||", name: "Norma", usage: "Longitud de vector", example: "||(3,4)||=5", category: "Álgebra lineal" },
    { symbol: "〈u,v〉", name: "Producto escalar", usage: "Multiplicación de vectores", example: "〈u,v〉=u·v", category: "Álgebra lineal" },
    { symbol: "⨯", name: "Producto vectorial", usage: "Producto en ℝ³", example: "u⨯v", category: "Álgebra lineal" },
    { symbol: "ħ", name: "Constante reducida de Planck", usage: "Constante fundamental en cuántica", example: "E=ħω", category: "Constantes y Física" },
    { symbol: "≡", name: "Congruencia", usage: "Equivalencia modular", example: "7≡2 (mod 5)", category: "Teoría de números" },
    { symbol: "mod", name: "Módulo", usage: "Resto de una división", example: "17 mod 5=2", category: "Teoría de números" },
    { symbol: "⟨u,v⟩", name: "Producto escalar", usage: "Multiplicación interna que devuelve un escalar", example: "⟨(1,2),(3,4)⟩ = 11", category: "Álgebra lineal" },
    { symbol: "u×v", name: "Producto vectorial", usage: "Vector perpendicular a u y v en ℝ³", example: "(1,0,0) × (0,1,0) = (0,0,1)", category: "Álgebra lineal" },
    { symbol: "||A||", name: "Norma de matriz", usage: "Tamaño de A (inducida, Frobenius, etc.)", example: "||A||₂", category: "Álgebra lineal" },
    { symbol: "diag", name: "Matriz diagonal", usage: "Construye matriz con elementos en la diagonal", example: "diag(1,2,3)", category: "Álgebra lineal" },
    { symbol: "tr(A)", name: "Traza", usage: "Suma de los elementos diagonales", example: "tr([[1,0],[0,2]]) = 3", category: "Álgebra lineal" },
    { symbol: "A⁻¹", name: "Matriz inversa", usage: "Matriz que satisface A·A⁻¹ = I", example: "A·A⁻¹ = I", category: "Álgebra lineal" },
    { symbol: "Iₙ", name: "Matriz identidad", usage: "Diagonal de 1’s; neutro multiplicativo", example: "I₂ = [[1,0],[0,1]]", category: "Álgebra lineal" },
    { symbol: "0", name: "Matriz nula", usage: "Todos sus elementos son 0", example: "0₃×₃", category: "Álgebra lineal" },
    { symbol: "span", name: "Subespacio generado", usage: "Conjunto de combinaciones lineales", example: "span{(1,0),(0,1)}", category: "Álgebra lineal" },
    { symbol: "ker(A)", name: "Núcleo", usage: "Soluciones de Ax = 0", example: "ker(A)", category: "Álgebra lineal" },
    { symbol: "im(A)", name: "Imagen", usage: "Valores alcanzables por Ax", example: "im(A)", category: "Álgebra lineal" },
    { symbol: "eig", name: "Autovalor", usage: "Escalar λ tal que Av = λv", example: "Av = λv", category: "Álgebra lineal" },
    { symbol: "eigvec", name: "Autovector", usage: "Vector no nulo asociado a λ", example: "v ≠ 0, Av = λv", category: "Álgebra lineal" },
    { symbol: "⊤", name: "Transpuesta / Verdadero", usage: "En matrices: transpuesta; en lógica: verdad", example: "A⊤ o ⊤", category: "Álgebra lineal/Lógica" },
    { symbol: "⊥⊥", name: "Cerradura ortogonal", usage: "Doble ortogonal de V", example: "V⊥⊥ = V", category: "Álgebra lineal" },
    { symbol: "lim sup", name: "Límite superior", usage: "Límite de los supremos parciales", example: "lim sup aₙ", category: "Análisis" },
    { symbol: "lim inf", name: "Límite inferior", usage: "Límite de los ínfimos parciales", example: "lim inf aₙ", category: "Análisis" },
    { symbol: "d²/dx²", name: "Derivada segunda", usage: "Curvatura/concavidad", example: "d²y/dx²", category: "Cálculo" },
    { symbol: "dⁿ/dxⁿ", name: "Derivada n-ésima", usage: "Derivación de orden alto", example: "d³y/dx³", category: "Cálculo" },
    { symbol: "∇·F", name: "Divergencia", usage: "Flujo neto saliente por unidad de volumen", example: "∇·F", category: "Cálculo vectorial" },
    { symbol: "∇×F", name: "Rotacional", usage: "Vorticidad/curl de F", example: "∇×F", category: "Cálculo vectorial" },
    { symbol: "∇²", name: "Laplaciano", usage: "Divergencia del gradiente (∆)", example: "∇²f = ∆f", category: "Cálculo/EDP" },
    { symbol: "∬S", name: "Integral de superficie", usage: "Flujo a través de una superficie", example: "∬_S F·dS", category: "Cálculo vectorial" },
    { symbol: "∭V", name: "Integral triple", usage: "Integración en volumen", example: "∭_V f(x,y,z) dV", category: "Cálculo" },
    { symbol: "⌠ ⌡", name: "Notación antigua de integral", usage: "Forma histórica para ∫", example: "⌠ f(x) dx ⌡", category: "Cálculo (hist.)" },
    { symbol: "∂Ω", name: "Frontera", usage: "Borde del dominio Ω", example: "∂Ω", category: "Análisis/Topología" },
    { symbol: "O(1)", name: "Orden constante", usage: "Cota asintótica superior constante", example: "T(n) = O(1)", category: "Complejidad" },
    { symbol: "O(n)", name: "Orden lineal", usage: "Cota asintótica superior lineal", example: "T(n) = O(n)", category: "Complejidad" },
    { symbol: "O(log n)", name: "Orden logarítmico", usage: "Cota asintótica superior logarítmica", example: "T(n) = O(log n)", category: "Complejidad" },
    { symbol: "o(n)", name: "Orden pequeño", usage: "Crecimiento estrictamente menor que n", example: "f(n) = o(n)", category: "Análisis asintótico" },
    { symbol: "Θ(n)", name: "Orden exacto", usage: "Cota ajustada arriba y abajo", example: "T(n) = Θ(n²)", category: "Complejidad" },
    { symbol: "≪", name: "Mucho menor", usage: "Dominancia asintótica", example: "n ≪ m", category: "Análisis asintótico" },
    { symbol: "≫", name: "Mucho mayor", usage: "Dominancia asintótica", example: "m ≫ n", category: "Análisis asintótico" },
    { symbol: "⊢", name: "Deducible (probar)", usage: "Provable en un sistema formal", example: "⊢ P → Q", category: "Lógica" },
    { symbol: "⊨", name: "Satisface / modela", usage: "Verdad semántica en un modelo", example: "M ⊨ φ", category: "Lógica" },
    { symbol: "≼", name: "Orden parcial (preorden)", usage: "Relación reflexiva y transitiva", example: "a ≼ b", category: "Teoría de órdenes" },
    { symbol: "≺", name: "Precedencia estricta", usage: "Relación estricta asociada", example: "a ≺ b", category: "Teoría de órdenes" },
    { symbol: "≃", name: "Isomorfismo", usage: "Estructuras con misma forma", example: "G ≃ H", category: "Álgebra abstracta" },
    { symbol: "≅", name: "Congruente/Isométrico", usage: "Igualdad por transformación rígida", example: "△ABC ≅ △DEF", category: "Geometría/Álgebra" },
    { symbol: "Hom", name: "Homomorfismos", usage: "Conjunto de morfismos entre objetos", example: "Hom(G,H)", category: "Álgebra/Teoría de categorías" },
    { symbol: "End", name: "Endomorfismos", usage: "Morfismos de V en V", example: "End(V)", category: "Álgebra" },
    { symbol: "Aut", name: "Automorfismos", usage: "Isomorfismos de G en sí mismo", example: "Aut(G)", category: "Álgebra" },
    { symbol: "GL(n)", name: "Grupo lineal general", usage: "Matrices n×n invertibles", example: "GL₂(ℝ)", category: "Álgebra lineal/Grupos" },
    { symbol: "SL(n)", name: "Grupo especial lineal", usage: "Matrices con determinante 1", example: "SL₂(ℝ)", category: "Álgebra lineal/Grupos" },
    { symbol: "det(A)=0", name: "Matriz singular", usage: "No es invertible", example: "det(A) = 0", category: "Álgebra lineal" },
    { symbol: "det(A)≠0", name: "Matriz regular", usage: "Es invertible", example: "det(A) ≠ 0", category: "Álgebra lineal" },
    { symbol: "⊄", name: "No subconjunto", usage: "A no está contenido en B", example: "A ⊄ B", category: "Teoría de conjuntos" },
    { symbol: "∖", name: "Diferencia de conjuntos", usage: "Elementos de A que no están en B", example: "A ∖ B", category: "Teoría de conjuntos" },
    { symbol: "⊎", name: "Unión disjunta", usage: "Unión de conjuntos sin intersección", example: "A ⊎ B", category: "Teoría de conjuntos" },
    { symbol: "⊔", name: "Supremo (join)", usage: "Menor cota superior de dos elementos", example: "a ⊔ b", category: "Teoría de órdenes" },
    { symbol: "⊓", name: "Ínfimo (meet)", usage: "Mayor cota inferior de dos elementos", example: "a ⊓ b", category: "Teoría de órdenes" },
    { symbol: "ℵ₀", name: "Aleph cero", usage: "Cardinal infinito numerable", example: "|ℕ| = ℵ₀", category: "Teoría de conjuntos" },
    { symbol: "ℵ₁", name: "Aleph uno", usage: "Siguiente cardinal infinito", example: "ℵ₁", category: "Teoría de conjuntos" },
    { symbol: "card(A)", name: "Cardinalidad", usage: "Número de elementos de A", example: "card({1,2,3}) = 3", category: "Teoría de conjuntos" },
    { symbol: "sup", name: "Supremo", usage: "Menor cota superior", example: "sup {aₙ}", category: "Análisis" },
    { symbol: "inf", name: "Ínfimo", usage: "Mayor cota inferior", example: "inf {aₙ}", category: "Análisis" },
    { symbol: "max", name: "Máximo", usage: "Mayor elemento (si existe)", example: "max{2,3,7} = 7", category: "Análisis/Conjuntos" },
    { symbol: "min", name: "Mínimo", usage: "Menor elemento (si existe)", example: "min{2,3,7} = 2", category: "Análisis/Conjuntos" },
    { symbol: "conv(S)", name: "Envolvente convexa", usage: "Conjunto de combinaciones convexas", example: "conv(A)", category: "Geometría convexa" },
    { symbol: "hull", name: "Convex hull (cáscara)", usage: "Notación para envolvente convexa", example: "hull(P)", category: "Geometría convexa" },
    { symbol: "nullity", name: "Nullidad", usage: "Dimensión del núcleo", example: "nullity(A) = n − rank(A)", category: "Álgebra lineal" },
    { symbol: "A⊤", name: "Transpuesta", usage: "Intercambia filas y columnas", example: "A⊤", category: "Álgebra lineal" },
    { symbol: "adj(A)", name: "Matriz adjunta (adjugate)", usage: "Usada para calcular A⁻¹", example: "A⁻¹ = adj(A)/det(A)", category: "Álgebra lineal" },
    { symbol: "cof(A)", name: "Matriz de cofactores", usage: "Cofactores C_ij de A", example: "cof(A)", category: "Álgebra lineal" },
    { symbol: "≜", name: "Definido como", usage: "Introduce definición explícita", example: "f(x) ≜ x² + 1", category: "Notación" },
    { symbol: ":=", name: "Definición/Asignación", usage: "Define por el lado derecho", example: "a := b²", category: "Notación" },
    { symbol: "≔", name: "Igualdad por definición", usage: "Equivale a “se define como”", example: "g(x) ≔ x+1", category: "Notación" },
    { symbol: "∵", name: "Porque", usage: "Indica justificación", example: "∵ a > b", category: "Notación lógica" },
    { symbol: "∴", name: "Por lo tanto", usage: "Indica conclusión", example: "a > b ∴ a ≠ c", category: "Notación lógica" },
    { symbol: "⇐", name: "Implicación inversa", usage: "‘Si’ desde la derecha", example: "q ⇐ p", category: "Lógica" },
    { symbol: "⇑", name: "Monotonía creciente", usage: "Función/secuencia aumenta", example: "f ⇑", category: "Análisis" },
    { symbol: "⇓", name: "Monotonía decreciente", usage: "Función/secuencia decrece", example: "f ⇓", category: "Análisis" },
    { symbol: "↑", name: "Secuencia creciente", usage: "aₙ no decreciente", example: "aₙ ↑", category: "Análisis" },
    { symbol: "↓", name: "Secuencia decreciente", usage: "aₙ no creciente", example: "aₙ ↓", category: "Análisis" },
    { symbol: "⟶", name: "Tiende", usage: "Límite de variable/función", example: "x ⟶ 0", category: "Análisis" },
    { symbol: "⟵", name: "Flecha izquierda", usage: "Transformación/función desde la derecha", example: "g: B ⟵ A", category: "Notación" },
    { symbol: "↕", name: "Bidireccional vertical", usage: "Relación en dos direcciones verticales", example: "x ↕ y", category: "Notación" },
    { symbol: "⇌", name: "Equilibrio", usage: "Reacción/estado reversible", example: "A ⇌ B", category: "Física/Química" },
    { symbol: "∡", name: "Medida angular", usage: "Ángulo con vértice nombrado", example: "∡ABC", category: "Geometría" },
    { symbol: "⌀", name: "Diámetro", usage: "Longitud del diámetro", example: "⌀ = 2r", category: "Geometría" },
    { symbol: "∥AB∥", name: "Longitud de segmento", usage: "Norma/distancia de AB", example: "∥AB∥ = 5", category: "Geometría" },
    { symbol: "⟦x⟧", name: "Piso entero (brackets)", usage: "Parte entera (estilo Iverson)", example: "⟦3.7⟧ = 3", category: "Análisis" },
    { symbol: "⌊x⌋", name: "Suelo (floor)", usage: "Redondeo hacia abajo", example: "⌊3.7⌋ = 3", category: "Análisis" },
    { symbol: "⌈x⌉", name: "Techo (ceil)", usage: "Redondeo hacia arriba", example: "⌈3.2⌉ = 4", category: "Análisis" },
    { symbol: "frac(x)", name: "Parte fraccionaria", usage: "x − ⌊x⌋", example: "frac(3.7) = 0.7", category: "Análisis" },
    { symbol: "P(A∩B)", name: "Probabilidad conjunta", usage: "Ocurrencia simultánea de A y B", example: "P(A∩B) = 0.2", category: "Probabilidad" },
    { symbol: "P(A∪B)", name: "Probabilidad de unión", usage: "Ocurre A o B (o ambos)", example: "P(A∪B) = P(A)+P(B)−P(A∩B)", category: "Probabilidad" },
    { symbol: "P(A|B)", name: "Probabilidad condicional", usage: "Probabilidad de A dado B", example: "P(A|B) = P(A∩B)/P(B)", category: "Probabilidad" },
    { symbol: "Bayes", name: "Fórmula de Bayes", usage: "Invierte condicionales usando evidencia", example: "P(A|B) = P(B|A)P(A)/P(B)", category: "Probabilidad" },
    { symbol: "~", name: "Distribución", usage: "Relaciona v.a. con su distribución", example: "X ~ N(0,1)", category: "Probabilidad" },
    { symbol: "f(x)", name: "Función de densidad (pdf)", usage: "Densidad para v.a. continua", example: "f(x) ≥ 0, ∫ f(x) dx = 1", category: "Probabilidad" },
    { symbol: "F(x)", name: "Función de distribución (cdf)", usage: "Probabilidad acumulada", example: "F(x) = P(X ≤ x)", category: "Probabilidad" },
    { symbol: "σ²", name: "Varianza (notación)", usage: "Varianza poblacional", example: "σ² = Var(X)", category: "Probabilidad/Estadística" },
    { symbol: "x̄", name: "Media muestral", usage: "Estimador de μ", example: "x̄ ≈ μ", category: "Estadística" },
    { symbol: "s²", name: "Varianza muestral", usage: "Estimador de σ²", example: "s² = Σ(xᵢ−x̄)²/(n−1)", category: "Estadística" },
    { symbol: "s", name: "Desviación muestral", usage: "Estimador de σ", example: "s = √s²", category: "Estadística" },
    { symbol: "cov(X,Y)", name: "Covarianza", usage: "Dependencia lineal no normalizada", example: "cov(X,Y) = E[(X−μX)(Y−μY)]", category: "Probabilidad/Estadística" },
    { symbol: "ρ", name: "Correlación de Pearson", usage: "Dependencia lineal normalizada", example: "ρ = cov(X,Y)/(σX σY)", category: "Probabilidad/Estadística" },
    { symbol: "χ²", name: "Chi-cuadrado", usage: "Distribución de sumas de cuadrados", example: "X ~ χ²_k", category: "Estadística inferencial" },
    { symbol: "t", name: "Distribución t-Student", usage: "Contrastes con σ desconocida", example: "t-test para media", category: "Estadística inferencial" },
    { symbol: "F", name: "Distribución F", usage: "Razón de varianzas (ANOVA)", example: "F-test", category: "Estadística inferencial" },
    { symbol: "U", name: "Uniforme", usage: "Distribución con densidad constante", example: "X ~ U(0,1)", category: "Probabilidad" },
    { symbol: "B(n,p)", name: "Binomial", usage: "Número de éxitos en n ensayos", example: "X ~ B(10, 0.3)", category: "Probabilidad" },
    { symbol: "Po(λ)", name: "Poisson", usage: "Conteo de eventos raros", example: "X ~ Po(5)", category: "Probabilidad" },
    { symbol: "Exp(λ)", name: "Exponencial", usage: "Tiempos entre eventos", example: "X ~ Exp(2)", category: "Probabilidad" },
    { symbol: "N(μ,σ²)", name: "Normal", usage: "Distribución gaussiana", example: "X ~ N(0,1)", category: "Probabilidad" },
    { symbol: "Z", name: "Normal estándar", usage: "Estandarización", example: "Z = (X−μ)/σ", category: "Probabilidad" },
    { symbol: "Pr", name: "Probabilidad (alternativa)", usage: "Notación alternativa a P", example: "Pr(A)", category: "Probabilidad" },
    { symbol: "⊻", name: "XOR lógico", usage: "Disyunción exclusiva", example: "p ⊻ q", category: "Lógica" },
    { symbol: "⊼", name: "NAND", usage: "Negación de p ∧ q", example: "p ⊼ q ≡ ¬(p ∧ q)", category: "Lógica" },
    { symbol: "⊽", name: "NOR", usage: "Negación de p ∨ q", example: "p ⊽ q ≡ ¬(p ∨ q)", category: "Lógica" },
    { symbol: "|=", name: "Satisface (entailment)", usage: "Modelo satisface fórmula", example: "M |= φ", category: "Lógica" },
    { symbol: "CNF", name: "Forma normal conjuntiva", usage: "Cláusulas AND de ORs", example: "(p∨q) ∧ (¬p∨r)", category: "Lógica" },
    { symbol: "DNF", name: "Forma normal disyuntiva", usage: "Cláusulas OR de ANDs", example: "(p∧q) ∨ (¬p∧r)", category: "Lógica" },
    { symbol: "∃!", name: "Existe único", usage: "Existe exactamente uno", example: "∃!x: P(x)", category: "Lógica" },
    { symbol: "⟹", name: "Entonces (deducción)", usage: "Implicación derivada", example: "A ⟹ B", category: "Lógica" },
    { symbol: "⟸", name: "Se sigue de", usage: "Implicación inversa derivada", example: "B ⟸ A", category: "Lógica" },
    { symbol: "|= φ", name: "Validez global", usage: "Fórmula es tautológica", example: "|= (p ∨ ¬p)", category: "Lógica" },
    { symbol: "T(n)", name: "Tiempo de ejecución", usage: "Función de complejidad temporal", example: "T(n) = O(n²)", category: "Complejidad" },
    { symbol: "Ω(n)", name: "Cota inferior", usage: "Límite inferior asintótico", example: "T(n) = Ω(n)", category: "Complejidad" },
    { symbol: "o(1)", name: "Pequeño o", usage: "Secuencia que tiende a 0", example: "f(n) = o(1)", category: "Análisis asintótico" },
    { symbol: "Prob", name: "Probabilidad (alternativa)", usage: "Otra notación de probabilidad", example: "Prob(A)", category: "Probabilidad" },
    { symbol: "CLT", name: "Teorema Central del Límite", usage: "Media muestral → Normal", example: "(X̄−μ)/(σ/√n) ⟶d N(0,1)", category: "Probabilidad/Teorema" },
    { symbol: "LLN", name: "Ley de los Grandes Números", usage: "Convergencia de medias", example: "X̄ ⟶p μ", category: "Probabilidad/Teorema" },
    { symbol: "⟶p", name: "Convergencia en probabilidad", usage: "Xₙ se acerca a X en probabilidad", example: "Xₙ ⟶p X", category: "Probabilidad" },
    { symbol: "⟶d", name: "Convergencia en distribución", usage: "CDFs convergen puntualmente", example: "Xₙ ⟶d X", category: "Probabilidad" },
    { symbol: "⟶a.s.", name: "Convergencia casi segura", usage: "Con probabilidad 1", example: "Xₙ ⟶a.s. X", category: "Probabilidad" },
    { symbol: "|A|", name: "Cardinalidad", usage: "Tamaño de conjunto finito", example: "|A| = n", category: "Conjuntos/Estadística" },
    { symbol: "𝔼[X]", name: "Esperanza (notación alternativa)", usage: "Valor esperado", example: "𝔼[X] = μ", category: "Probabilidad" },
    { symbol: "ℙ", name: "Probabilidad (formal)", usage: "Medida de probabilidad", example: "ℙ(A)", category: "Probabilidad" },
    { symbol: "Cov(X,Y)", name: "Covarianza (alt.)", usage: "Misma que cov(X,Y)", example: "Cov(X,Y)", category: "Probabilidad/Estadística" },
    { symbol: "Corr(X,Y)", name: "Correlación (alt.)", usage: "Misma que ρ", example: "Corr(X,Y) = ρ", category: "Probabilidad/Estadística" },
    { symbol: "Skew(X)", name: "Asimetría (skewness)", usage: "Sesgo de la distribución", example: "Skew(X) = E[((X−μ)/σ)³]", category: "Estadística descriptiva" },
    { symbol: "Kurt(X)", name: "Curtosis (kurtosis)", usage: "Apuntamiento de la cola", example: "Kurt(X) = E[((X−μ)/σ)⁴]", category: "Estadística descriptiva" },
    { symbol: "Q₁, Q₂, Q₃", name: "Cuartiles", usage: "Dividen datos en 4 partes", example: "Q₂ = mediana", category: "Estadística descriptiva" },
    { symbol: "Med", name: "Mediana", usage: "Valor central", example: "Med({1,3,9}) = 3", category: "Estadística descriptiva" },
    { symbol: "Mode", name: "Moda", usage: "Valor más frecuente", example: "Mode([1,1,2,3]) = 1", category: "Estadística descriptiva" },
    { symbol: "MAD", name: "Desv. absoluta mediana", usage: "Robustez frente a outliers", example: "MAD = Med(|xᵢ−Med(x)|)", category: "Estadística robusta" },
    { symbol: "IQR", name: "Rango intercuartílico", usage: "Dispersión central", example: "IQR = Q₃ − Q₁", category: "Estadística descriptiva" },
    { symbol: "∑xᵢ", name: "Suma de datos", usage: "Total de observaciones", example: "∑xᵢ = x₁ + … + xₙ", category: "Estadística descriptiva" },
    { symbol: "∑xᵢ²", name: "Suma de cuadrados", usage: "Cálculo de varianza", example: "∑xᵢ²", category: "Estadística descriptiva" },
    { symbol: "R²", name: "Coeficiente de determinación", usage: "Proporción de varianza explicada", example: "0 ≤ R² ≤ 1", category: "Regresión" },
    { symbol: "β", name: "Coeficientes de regresión", usage: "Parámetros de modelo lineal", example: "Y = β₀ + β₁ X + ε", category: "Regresión" },
    { symbol: "α", name: "Nivel de significancia", usage: "Umbral de rechazo", example: "α = 0.05", category: "Inferencia" },
    { symbol: "H₀", name: "Hipótesis nula", usage: "Afirmación a contrastar", example: "H₀: μ = 0", category: "Inferencia" },
    { symbol: "H₁", name: "Hipótesis alternativa", usage: "Contraposición a H₀", example: "H₁: μ ≠ 0", category: "Inferencia" },
    { symbol: "p-val", name: "Valor p", usage: "Evidencia contra H₀", example: "p < α ⇒ rechazo", category: "Inferencia" },
    { symbol: "CI", name: "Intervalo de confianza", usage: "Rango de valores plausibles", example: "95% CI para μ", category: "Inferencia" },
    { symbol: "LLR", name: "Log-likelihood ratio", usage: "Estadístico para comparar modelos", example: "LLR = 2(ℓ₁ − ℓ₀)", category: "Inferencia" },
    { symbol: "KL(P||Q)", name: "Divergencia KL", usage: "Distancia informativa asimétrica", example: "KL(P||Q) = ∑ P log(P/Q)", category: "Teoría de la información" },
    { symbol: "Ent(X)", name: "Entropía", usage: "Incertidumbre media", example: "Ent(X) = −∑ p log p", category: "Teoría de la información" },
    { symbol: "MI(X,Y)", name: "Información mutua", usage: "Información compartida", example: "MI(X,Y) = Ent(X)+Ent(Y)−Ent(X,Y)", category: "Teoría de la información" },
    { symbol: "H(X|Y)", name: "Entropía condicional", usage: "Incertidumbre de X dado Y", example: "H(X|Y) = Ent(X,Y) − Ent(Y)", category: "Teoría de la información" },
    { symbol: "⊗", name: "Producto de Kronecker", usage: "Producto tensorial entre matrices", example: "A ⊗ B", category: "Álgebra lineal/Estadística" },
    { symbol: "det Σ", name: "Determinante de covarianzas", usage: "Volumen/disp. multivariante", example: "det(Σ) > 0", category: "Estadística multivariante" },
    { symbol: "Σ⁻¹", name: "Inversa de covarianzas", usage: "Precisión en normal multivariante", example: "Σ⁻¹", category: "Estadística multivariante" },
    { symbol: "∠ABC", name: "Ángulo", usage: "Ángulo definido por tres puntos", example: "∠ABC = 60°", category: "Geometría" },
    { symbol: "□", name: "Cuadrado", usage: "Polígono regular de 4 lados", example: "□ABCD", category: "Geometría" },
    { symbol: "⬠", name: "Pentágono", usage: "Polígono de 5 lados", example: "Pentágono ABCDE", category: "Geometría" },
    { symbol: "⬡", name: "Hexágono", usage: "Polígono de 6 lados", example: "Hexágono A…F", category: "Geometría" },
    { symbol: "⬣", name: "Heptágono", usage: "Polígono de 7 lados", example: "Heptágono", category: "Geometría" },
    { symbol: "⬢", name: "Octágono", usage: "Polígono de 8 lados", example: "Octágono", category: "Geometría" },
    { symbol: "r", name: "Radio", usage: "Distancia del centro al borde", example: "r", category: "Geometría" },
    { symbol: "C", name: "Circunferencia (perímetro)", usage: "Longitud del perímetro del círculo", example: "C = 2πr", category: "Geometría" },
    { symbol: "A", name: "Área", usage: "Superficie del círculo", example: "A = πr²", category: "Geometría" },
    { symbol: "V", name: "Volumen", usage: "Volumen de una esfera", example: "V = (4/3)πr³", category: "Geometría" },
    { symbol: "d(A,B)", name: "Distancia métrica", usage: "Distancia definida por una métrica", example: "d(A,B) = |A−B|", category: "Topología/Métricas" },
    { symbol: "int(A)", name: "Interior", usage: "Puntos interiores de A", example: "int(A)", category: "Topología" },
    { symbol: "cl(A)", name: "Clausura (cierre)", usage: "A más sus puntos límite", example: "cl(A)", category: "Topología" },
    { symbol: "bd(A)", name: "Borde", usage: "Frontera de A", example: "bd(A) = cl(A) ∖ int(A)", category: "Topología" },
    { symbol: "diam(A)", name: "Diámetro (conjunto)", usage: "Sup de distancias internas", example: "diam(A)", category: "Topología/Métricas" },
    { symbol: "⊃", name: "Superconjunto", usage: "A contiene a B", example: "A ⊃ B", category: "Conjuntos" },
    { symbol: "⊇", name: "Superconjunto o igual", usage: "Inclusión amplia", example: "A ⊇ B", category: "Conjuntos" },
    { symbol: "⊙", name: "Círculo con centro", usage: "Círculo con centro indicado", example: "⊙O", category: "Geometría" },
    { symbol: "θ", name: "Theta", usage: "Ángulo polar", example: "θ = 90°", category: "Coordenadas" },
    { symbol: "φ", name: "Phi", usage: "Ángulo esférico/azimutal", example: "φ", category: "Coordenadas" },
    { symbol: "r,θ", name: "Coordenadas polares", usage: "Par (r, θ) en el plano", example: "(r, θ)", category: "Coordenadas" },
    { symbol: "(r,θ,φ)", name: "Coordenadas esféricas", usage: "Radio y dos ángulos", example: "(r, θ, φ)", category: "Coordenadas" },
    { symbol: "(ρ,φ,z)", name: "Coordenadas cilíndricas", usage: "Radio, ángulo, altura", example: "(ρ, φ, z)", category: "Coordenadas" },
    { symbol: "↑", name: "Vector vertical (arriba)", usage: "Dirección hacia arriba", example: "↑", category: "Vectores" },
    { symbol: "↓", name: "Vector vertical (abajo)", usage: "Dirección hacia abajo", example: "↓", category: "Vectores" },
    { symbol: "↔", name: "Vector horizontal", usage: "Dirección izquierda–derecha", example: "↔", category: "Vectores" },
    { symbol: "F=ma", name: "Segunda ley de Newton", usage: "Relación fuerza–masa–aceleración", example: "F = m·a", category: "Mecánica" },
    { symbol: "∑F", name: "Suma de fuerzas", usage: "Equilibrio/dinámica", example: "∑F = 0", category: "Mecánica" },
    { symbol: "p", name: "Momento lineal", usage: "Cantidad de movimiento", example: "p = m·v", category: "Mecánica" },
    { symbol: "τ", name: "Torque", usage: "Momento de una fuerza", example: "τ = r × F", category: "Mecánica" },
    { symbol: "L", name: "Momento angular", usage: "Rotación", example: "L = r × p", category: "Mecánica" },
    { symbol: "W", name: "Trabajo", usage: "Energía transferida por fuerza", example: "W = F · d", category: "Mecánica" },
    { symbol: "P", name: "Potencia", usage: "Trabajo por unidad de tiempo", example: "P = W/t", category: "Mecánica" },
    { symbol: "E", name: "Energía", usage: "Magnitud física (varios tipos)", example: "E = m c²", category: "Física" },
    { symbol: "K", name: "Energía cinética", usage: "Energía del movimiento", example: "K = ½ m v²", category: "Mecánica" },
    { symbol: "U", name: "Energía potencial", usage: "Energía almacenada", example: "U = m g h", category: "Mecánica" },
    { symbol: "ρ", name: "Densidad", usage: "Masa por unidad de volumen", example: "ρ = m/V", category: "Fluidos" },
    { symbol: "γ", name: "Peso específico", usage: "Peso por volumen", example: "γ = ρ g", category: "Fluidos" },
    { symbol: "p", name: "Presión", usage: "Fuerza por área", example: "p = F/A", category: "Fluidos" },
    { symbol: "∆P", name: "Diferencia de presión", usage: "Caída/variación de presión", example: "∆P", category: "Fluidos" },
    { symbol: "η", name: "Viscosidad dinámica", usage: "Resistencia al flujo", example: "η = F/A · (dv/dy)", category: "Fluidos" },
    { symbol: "Re", name: "Número de Reynolds", usage: "Régimen laminar/turbulento", example: "Re = ρ v L / μ", category: "Fluidos/Aero" },
    { symbol: "Ma", name: "Número de Mach", usage: "Velocidad relativa al sonido", example: "Ma = v/c", category: "Fluidos/Aero" },
    { symbol: "Ra", name: "Número de Rayleigh", usage: "Convección térmica", example: "Ra = g β ∆T L³ / (ν α)", category: "Fluidos/Térmica" },
    { symbol: "k_B", name: "Constante de Boltzmann", usage: "Relación energía–temperatura", example: "E = k_B T", category: "Termodinámica" },
    { symbol: "σ_SB", name: "Constante de Stefan–Boltzmann", usage: "Potencia radiada de un cuerpo negro", example: "j* = σ_SB T⁴", category: "Radiación" },
    { symbol: "ε₀", name: "Permisividad del vacío", usage: "Electrostática (constante de Coulomb)", example: "k = 1/(4π ε₀)", category: "Electromagnetismo" },
    { symbol: "μ₀", name: "Permeabilidad del vacío", usage: "Relación B–H", example: "B = μ₀ H", category: "Electromagnetismo" },
    { symbol: "∮F·dr", name: "Integral de línea", usage: "Trabajo de un campo a lo largo de C", example: "∮_C F·dr", category: "Cálculo/Física" },
    { symbol: "∯F·dS", name: "Integral de superficie", usage: "Flujo a través de S", example: "∯_S F·dS", category: "Cálculo/Física" },
    { symbol: "∰F·dV", name: "Integral de volumen", usage: "Integral en una región 3D", example: "∰_V F·dV", category: "Cálculo/Física" },
    { symbol: "∬", name: "Integral doble", usage: "Cálculo de áreas/masas", example: "∬ f(x,y) dx dy", category: "Cálculo" },
    { symbol: "∭", name: "Integral triple", usage: "Cálculo de volúmenes", example: "∭ f(x,y,z) dV", category: "Cálculo" },
    { symbol: "∂t", name: "Derivada temporal", usage: "Variación respecto al tiempo", example: "∂T/∂t", category: "Cálculo" },
    { symbol: "∂²/∂x²", name: "Segunda derivada espacial", usage: "Ondas/calor/difusión 1D", example: "∂²u/∂x²", category: "Cálculo" },
    { symbol: "⟶", name: "Tiende", usage: "Límite hacia un valor", example: "t ⟶ ∞", category: "Análisis/Física" },
    { symbol: "ℤ/nℤ", name: "Enteros módulo n", usage: "Clases de equivalencia", example: "ℤ/5ℤ", category: "Avanzado" },
    { symbol: "ordₙ(a)", name: "Orden módulo n", usage: "Orden multiplicativo", example: "ord₇(3)=6", category: "Avanzado" },
    { symbol: "φ(n)", name: "Función de Euler", usage: "Números coprimos", example: "φ(9)=6", category: "Avanzado" },
    { symbol: "μ(n)", name: "Función de Möbius", usage: "Teoría de números", example: "μ(6)=1", category: "Avanzado" },
    { symbol: "τ(n)", name: "Función divisor", usage: "Nº de divisores", example: "τ(12)=6", category: "Avanzado" },
    { symbol: "σ(n)", name: "Suma de divisores", usage: "Función aritmética", example: "σ(6)=12", category: "Avanzado" },
    { symbol: "{x}", name: "Parte fraccionaria", usage: "x−⌊x⌋", example: "{3.7}=0.7", category: "Avanzado" },
    { symbol: "gcd(a,b)", name: "Máximo común divisor", usage: "Divisor mayor", example: "gcd(12,8)=4", category: "Avanzado" },
    { symbol: "lcm(a,b)", name: "Mínimo común múltiplo", usage: "Múltiplo menor", example: "lcm(12,8)=24", category: "Avanzado" },
    { symbol: "∤", name: "No divide", usage: "Divisibilidad", example: "5∤12", category: "Avanzado" },
    { symbol: "∣", name: "Divide", usage: "Divisibilidad", example: "3∣12", category: "Avanzado" },
    { symbol: "⋊", name: "Producto semidirecto", usage: "Grupos", example: "G⋊H", category: "Avanzado" },
    { symbol: "⋉", name: "Semidirecto alterno", usage: "Grupos", example: "H⋉G", category: "Avanzado" },
    { symbol: "⋈", name: "Join", usage: "Álgebra relacional", example: "A⋈B", category: "Avanzado" },
    { symbol: "grp", name: "Grupo", usage: "Conjunto con operación", example: "(ℤ,+)", category: "Avanzado" },
    { symbol: "rng", name: "Anillo", usage: "Conjunto con + y ·", example: "ℤ", category: "Avanzado" },
    { symbol: "fld", name: "Cuerpo", usage: "Anillo con inversos", example: "ℚ", category: "Avanzado" },
    { symbol: "⟨S⟩", name: "Subgrupo generado", usage: "Teoría de grupos", example: "⟨a⟩", category: "Avanzado" },
    { symbol: "Z(G)", name: "Centro de grupo", usage: "Elementos que conmutan", example: "Z(S₃)", category: "Avanzado" },
    { symbol: "|G|", name: "Orden de grupo", usage: "Nº de elementos", example: "|ℤ₆|=6", category: "Avanzado" },
    { symbol: "Aut(G)", name: "Automorfismos", usage: "Isomorfismos G→G", example: "Aut(ℤ₆)", category: "Avanzado" },
    { symbol: "End(V)", name: "Endomorfismos", usage: "V→V", example: "End(V)", category: "Avanzado" },
    { symbol: "Hom(V,W)", name: "Homomorfismos", usage: "V→W", example: "Hom(ℝ²,ℝ³)", category: "Avanzado" },
    { symbol: "Gal(E/F)", name: "Grupo de Galois", usage: "Extensiones de cuerpos", example: "Gal(ℚ(√2)/ℚ)", category: "Avanzado" },
    { symbol: "⋀", name: "Conjunción infinita", usage: "Lógica avanzada", example: "⋀Pᵢ", category: "Avanzado" },
    { symbol: "⋁", name: "Disyunción infinita", usage: "Lógica avanzada", example: "⋁Qᵢ", category: "Avanzado" },
    { symbol: "⊨ φ", name: "Validez semántica", usage: "Modelo satisface", example: "M⊨φ", category: "Avanzado" },
    { symbol: "⊢ φ", name: "Derivable", usage: "Deducción formal", example: "⊢ φ", category: "Avanzado" },
    { symbol: "≃", name: "Homotopía", usage: "Topología", example: "f≃g", category: "Avanzado" },
    { symbol: "∼", name: "Relación de equivalencia", usage: "Clases", example: "a∼b", category: "Avanzado" },
    { symbol: "[x]", name: "Clase de equivalencia", usage: "Mod n", example: "[3]₅", category: "Avanzado" },
    { symbol: "π₁(X)", name: "Grupo fundamental", usage: "Topología", example: "π₁(S¹)=ℤ", category: "Avanzado" },
    { symbol: "πₙ(X)", name: "Grupo de homotopía", usage: "Topología", example: "π₂(S²)=ℤ", category: "Avanzado" },
    { symbol: "Hₙ(X)", name: "Homología", usage: "Topología algebraica", example: "H₀(X)", category: "Avanzado" },
    { symbol: "Ĥₙ(X)", name: "Homología reducida", usage: "Variante", example: "Ĥ₀(X)", category: "Avanzado" },
    { symbol: "Hⁿ(X)", name: "Cohomología", usage: "Dual de homología", example: "H¹(X)", category: "Avanzado" },
    { symbol: "Tor", name: "Tor functor", usage: "Homología", example: "Tor(A,B)", category: "Avanzado" },
    { symbol: "Ext", name: "Ext functor", usage: "Cohomología", example: "Ext(A,B)", category: "Avanzado" },
    { symbol: "lim", name: "Límite categórico", usage: "Categorías", example: "lim F", category: "Avanzado" },
    { symbol: "colim", name: "Colímite", usage: "Categorías", example: "colim F", category: "Avanzado" },
    { symbol: "Fun(C,D)", name: "Funtores", usage: "Categorías", example: "F: C→D", category: "Avanzado" },
    { symbol: "Nat(F,G)", name: "Transformaciones naturales", usage: "F⇒G", example: "Nat(F,G)", category: "Avanzado" },
    { symbol: "ℒ{f}", name: "Transformada de Laplace", usage: "Análisis", example: "ℒ{e^−at}", category: "Avanzado" },
    { symbol: "ℒ⁻¹", name: "Inversa Laplace", usage: "Transformadas", example: "ℒ⁻¹(F(s))", category: "Avanzado" },
    { symbol: "ℱ{f}", name: "Transformada de Fourier", usage: "Señales", example: "ℱ{sin t}", category: "Avanzado" },
    { symbol: "ℱ⁻¹", name: "Inversa Fourier", usage: "Frecuencia→tiempo", example: "ℱ⁻¹(F(ω))", category: "Avanzado" },
    { symbol: "Z{f}", name: "Transformada Z", usage: "Sistemas discretos", example: "Z{x[n]}", category: "Avanzado" },
    { symbol: "Res(f,a)", name: "Residuo", usage: "Complejo", example: "Res(f,z₀)", category: "Avanzado" },
    { symbol: "arg(z)", name: "Argumento", usage: "Complejo", example: "arg(1+i)=π/4", category: "Avanzado" },
    { symbol: "|z|", name: "Módulo complejo", usage: "Distancia a 0", example: "|3+4i|=5", category: "Avanzado" },
    { symbol: "Re(z)", name: "Parte real", usage: "Complejos", example: "Re(3+4i)=3", category: "Avanzado" },
    { symbol: "Im(z)", name: "Parte imaginaria", usage: "Complejos", example: "Im(3+4i)=4", category: "Avanzado" },
    { symbol: "Hol(f)", name: "Holomorfa", usage: "Analítica en abierto", example: "Hol(f)", category: "Avanzado" },
    { symbol: "Mer(f)", name: "Meromorfa", usage: "Singularidades aisladas", example: "Mer(f)", category: "Avanzado" },
    { symbol: "Res", name: "Residuo", usage: "Teorema de residuos", example: "Res(f,a)", category: "Avanzado" },
    { symbol: "∮γ", name: "Integral cerrada", usage: "Complejo", example: "∮γ f(z) dz", category: "Avanzado" },
    { symbol: "ℓ²", name: "Espacio de Hilbert", usage: "Secuencias cuadrado-sumables", example: "ℓ²", category: "Avanzado" },
    { symbol: "L²", name: "Espacio de Lebesgue", usage: "Funciones cuadrado integrables", example: "L²([0,1])", category: "Avanzado" },
    { symbol: "C⁰", name: "Funciones continuas", usage: "Topología", example: "C⁰(X)", category: "Avanzado" },
    { symbol: "C¹", name: "Funciones derivables", usage: "Análisis", example: "C¹(X)", category: "Avanzado" },
    { symbol: "C^∞", name: "Funciones suaves", usage: "Derivables infinitas", example: "C^∞(ℝ)", category: "Avanzado" },
    { symbol: "D'(X)", name: "Distribuciones", usage: "Análisis funcional", example: "D'(ℝ)", category: "Avanzado" },
    { symbol: "δ(x)", name: "Delta de Dirac", usage: "Distribución", example: "∫δ(x)f(x)dx=f(0)", category: "Avanzado" },
    { symbol: "𝟙_A", name: "Función indicadora", usage: "Análisis de probabilidad", example: "𝟙_A(x)=1 si x∈A", category: "Avanzado" },
    { symbol: "supp(f)", name: "Soporte", usage: "Donde f≠0", example: "supp(f)", category: "Avanzado" },
    { symbol: "ess sup", name: "Supremo esencial", usage: "Medida", example: "ess sup f", category: "Avanzado" },
    { symbol: "ess inf", name: "Ínfimo esencial", usage: "Medida", example: "ess inf f", category: "Avanzado" },
    { symbol: "∥f∥ₚ", name: "Norma p", usage: "Espacios Lp", example: "∥f∥₂", category: "Avanzado" },
    { symbol: "B(x,r)", name: "Bola abierta", usage: "Métrica", example: "B(0,1)", category: "Avanzado" },
    { symbol: "cl(B)", name: "Clausura de bola", usage: "Cerrada", example: "cl(B(0,1))", category: "Avanzado" },
    { symbol: "diam(X)", name: "Diámetro", usage: "Topología métrica", example: "diam(X)", category: "Avanzado" },
    { symbol: "d(x,y)", name: "Distancia", usage: "Métrica", example: "d(x,y)=|x−y|", category: "Avanzado" },
    { symbol: "≪", name: "Mucho menor", usage: "Teoría asintótica", example: "n ≪ m", category: "Avanzado" },
    { symbol: "≫", name: "Mucho mayor", usage: "Teoría asintótica", example: "m ≫ n", category: "Avanzado" }
];
// ====================
// CONFIG TAGS (mostrar más/menos)
// ====================
const MAX_VISIBLE_TAGS = 18;

// ====================
// ESTADO GLOBAL
// ====================
let activeCategory = null;
let filteredData = [];
let currentPage = 1;

// ====================
// ELEMENTOS DOM
// ====================
const filtersContainer = document.querySelector(".filters");
const searchInput = document.getElementById("q");
const grid = document.querySelector(".grid");
const pagination = document.getElementById("pagination");
const pageSizeSelect = document.getElementById("pageSize");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");
const absoluteTotalEl = document.getElementById("absoluteTotal");

// Totales iniciales
absoluteTotalEl.textContent = DATA.length;

// ====================
// RENDER TAGS
// ====================
const categories = [...new Set(DATA.map(i => i.category))].sort((a, b) => a.localeCompare(b, 'es'));

function renderTags() {
    const visibleCats = categories.slice(0, MAX_VISIBLE_TAGS);
    const hiddenCats = categories.slice(MAX_VISIBLE_TAGS);

    const btn = (cat, extra = false) =>
        `<button class="btn ${activeCategory === cat ? 'active' : ''} ${extra ? 'hidden extra-tag' : ''}" data-category="${cat}">${cat}</button>`;

    const html = [
        `<button class="btn ${activeCategory === null ? 'active' : ''}" data-category="__ALL__">Todos</button>`,
        ...visibleCats.map(c => btn(c)),
        ...hiddenCats.map(c => btn(c, true)),
        hiddenCats.length
            ? `<button id="toggleTags" class="show-more-btn" data-expanded="false">Mostrar más</button>`
            : ""
    ].join("");

    filtersContainer.innerHTML = html;
}
renderTags();

filtersContainer.addEventListener("click", (e) => {
    const t = e.target;

    if (t.classList.contains("btn") && !t.id) {
        const selected = t.dataset.category;
        activeCategory = (selected === "__ALL__") ? null : (activeCategory === selected ? null : selected);

        document.querySelectorAll(".filters .btn").forEach(b => b.classList.remove("active"));
        document
            .querySelector(`.filters .btn[data-category="${activeCategory ?? '__ALL__'}"]`)
            ?.classList.add("active");

        currentPage = 1;
        applyFilters();
    }

    if (t.id === "toggleTags") {
        const expanded = t.getAttribute("data-expanded") === "true";
        document.querySelectorAll(".extra-tag").forEach(el => el.classList.toggle("hidden", expanded));
        t.textContent = expanded ? "Mostrar más" : "Mostrar menos";
        t.setAttribute("data-expanded", (!expanded).toString());
    }
});

// ====================
// BÚSQUEDA + PAGE SIZE
// ====================
searchInput.addEventListener("input", () => {
    currentPage = 1;
    applyFilters();
});

pageSizeSelect.addEventListener("change", () => {
    currentPage = 1;
    renderGrid();
    renderPagination();
});

// ====================
// APLICAR FILTROS
// ====================
function applyFilters() {
    const q = (searchInput.value || "").toLowerCase().trim();

    filteredData = DATA.filter(item => {
        const matchesSearch =
            item.symbol.toLowerCase().includes(q) ||
            item.name.toLowerCase().includes(q) ||
            item.usage.toLowerCase().includes(q) ||
            item.example.toLowerCase().includes(q);

        const matchesCategory = !activeCategory || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    totalEl.textContent = filteredData.length;

    renderGrid();
    renderPagination();
}

// ====================
// RENDER GRID (cards)
// ====================
function renderGrid() {
    const pageSize = parseInt(pageSizeSelect.value, 10);
    const total = filteredData.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    currentPage = Math.min(currentPage, totalPages);

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageItems = filteredData.slice(start, end);

    // X = visibles en esta página; Y = total filtrado
    countEl.textContent = pageItems.length;

    if (!pageItems.length) {
        grid.innerHTML = `<div class="no-results">No se encontraron resultados.</div>`;
        return;
    }

    grid.innerHTML = pageItems.map(item => `
    <div class="card">
      <div class="symbol">${item.symbol}</div>
      <div class="name">${item.name}</div>
      <div class="usage">${item.usage}</div>
      <div class="example">${item.example}</div>
      <div class="meta"><span>${item.category}</span></div>

      <button class="copy-btn" data-symbol="${item.symbol}">
        <span class="copy-label"><i class="fa-solid fa-copy"></i> Copiar símbolo</span>
      </button>
    </div>
  `).join("");

    // Activar botones copiar
    grid.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const sym = btn.dataset.symbol;
            try {
                await navigator.clipboard.writeText(sym);
            } catch {
                // fallback (select + execCommand) omitido por brevedad
            }

            // Visual feedback: "¡Copiado!"
            btn.classList.add("copied");
            btn.disabled = true;
            btn.innerHTML = `<span class="copy-label"><i class="fa-solid fa-check"></i> ¡Copiado!</span>`;

            setTimeout(() => {
                btn.classList.remove("copied");
                btn.disabled = false;
                btn.innerHTML = `<span class="copy-label"><i class="fa-solid fa-copy"></i> Copiar símbolo</span>`;
            }, 1200);
        });
    });
}

// ====================
// PAGINACIÓN
// ====================
function renderPagination() {
    const pageSize = parseInt(pageSizeSelect.value, 10);
    const totalPages = Math.ceil(filteredData.length / pageSize);

    if (totalPages <= 1) {
        pagination.innerHTML = "";
        return;
    }

    const btn = (label, page, extraClass = "") =>
        `<button class="page-btn ${extraClass} ${page === currentPage ? 'active' : ''}" data-page="${page}">${label}</button>`;

    let html = "";
    html += `<button class="page-btn nav-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>‹</button>`;

    const pages = new Set([1, 2, totalPages - 1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    const ordered = [...pages].filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b);

    let prev = 0;
    for (const p of ordered) {
        if (p - prev > 1) html += `<span class="ellipsis">…</span>`;
        html += btn(p, p);
        prev = p;
    }

    html += `<button class="page-btn nav-btn ${currentPage === totalPages ? 'disabled' : ''}" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>›</button>`;

    pagination.innerHTML = html;

    pagination.querySelectorAll(".page-btn:not(.disabled)").forEach(b => {
        b.addEventListener("click", () => {
            const p = parseInt(b.dataset.page, 10);
            if (!isNaN(p)) {
                currentPage = Math.min(Math.max(1, p), totalPages);
                renderGrid();
                renderPagination();
            }
        });
    });
}

// ====================
// RENDER INICIAL
// ====================
applyFilters();
