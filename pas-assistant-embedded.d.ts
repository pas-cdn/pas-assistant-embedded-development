/**
 * Web Component para integração do PAS Assistant em qualquer aplicação.
 *
 * @example
 * ```tsx
 * <pas-assistant-embedded
 *   api-key="your-api-key"
 *   auth="your-auth-token"
 *   hostname="example.com"
 *   position="bottom-right"
 * >
 *   <p>Carregando Assistente...</p>
 * </pas-assistant-embedded>
 * ```
 */

import 'react'

/**
 * Atributos do componente pas-assistant-embedded
 */
export interface PasAssistantEmbeddedAttributes
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Chave de API para autenticação nas requisições GraphQL.
   *
   * @required
   * @example
   * ```html
   * <pas-assistant-embedded api-key="abc123xyz" ...>
   * ```
   */
  'api-key'?: string

  /**
   * Token de autenticação (Bearer token) do usuário.
   *
   * @example
   * ```html
   * <pas-assistant-embedded auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." ...>
   * ```
   */
  auth?: string

  /**
   * Hostname utilizado para roteamento e auditoria no BFF.
   *
   * @required
   * @example
   * ```html
   * <pas-assistant-embedded hostname="example.com" ...>
   * ```
   */
  hostname?: string

  /**
   * Posição do assistente na tela.
   *
   * ⚠️ **Recomendação**: Prefira usar as posições predefinidas sempre que possível.
   *
   * Aceita dois formatos:
   * 1. **Posições predefinidas** (Recomendado): `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`
   * 2. **Coordenadas customizadas**: Formato nomeado `"(top|bottom):valor (left|right):valor"`
   *
   * **Regras para coordenadas customizadas:**
   * - Deve sempre ter **(top OU bottom)** E **(left OU right)**
   * - Valores em pixels (px é opcional)
   * - Aceita qualquer ordem: `"top:12 left:12"` ou `"left:12 top:12"`
   * - Aceita unidades: `px`, `%`, `rem`, `vh`, `vw`
   * - **Limites automáticos**: left/right máximo 568px, top/bottom máximo 85vh
   *
   * ⚠️ **Nota**: Com coordenadas customizadas, a chat window será posicionada de forma fixa na viewport (não relativa ao float button).
   *
   * @default "bottom-right"
   *
   * @example
   * ```html
   * <!-- Posição predefinida (Recomendado) -->
   * <pas-assistant-embedded position="top-right" ...>
   *
   * <!-- Coordenadas customizadas -->
   * <pas-assistant-embedded position="top:16 left:32" ...>
   * <pas-assistant-embedded position="bottom:40 right:40" ...>
   * <!-- Valores acima dos limites serão automaticamente limitados -->
   * <pas-assistant-embedded position="top:20 right:800" ...>
   * <!-- Resultado: top:20 right:568 -->
   * ```
   *
   * @example
   * ```html
   * <!-- ❌ Inválido: apenas uma coordenada -->
   * <pas-assistant-embedded position="top:12" ...>
   *
   * <!-- ❌ Inválido: formato numérico não suportado -->
   * <pas-assistant-embedded position="16 64 0 0" ...>
   * ```
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Web Component para integração do PAS Assistant.
       *
       * @example
       * ```tsx
       * <pas-assistant-embedded
       *   api-key="your-api-key"
       *   auth="your-auth-token"
       *   hostname="example.com"
       *   position="bottom-right"
       * />
       * ```
       */
      'pas-assistant-embedded': PasAssistantEmbeddedAttributes
    }
  }
}

// biome-ignore lint/complexity/noUselessEmptyExport: Required to make this file a module for declare global
export {}
