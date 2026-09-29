/* @ds-bundle: {"format":4,"namespace":"NEWWAVEDesignSystem_7c7a93","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandIcon","sourcePath":"components/core/BrandIcon.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GradientText","sourcePath":"components/core/GradientText.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"WaveDivider","sourcePath":"components/core/WaveDivider.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"782b5559d962","components/core/BrandIcon.jsx":"59f59e5ea7e6","components/core/Button.jsx":"b822457d9f6a","components/core/Card.jsx":"8d31e417c1e8","components/core/GradientText.jsx":"4c6ca02a0bdb","components/core/IconButton.jsx":"da4a0952195f","components/core/Logo.jsx":"ae124fff813f","components/core/StatCard.jsx":"afe1a1af5746","components/core/Tag.jsx":"2de036210300","components/core/WaveDivider.jsx":"d213359b3694","components/feedback/Alert.jsx":"c1af105f1212","components/feedback/ProgressBar.jsx":"3ed408bf6b4b","components/feedback/Spinner.jsx":"be0fac64d74d","components/feedback/Tooltip.jsx":"c89c39cd185e","components/forms/Checkbox.jsx":"ee8f904c70cd","components/forms/Input.jsx":"fc1bb0317e36","components/forms/Radio.jsx":"677cf8aa3adb","components/forms/Select.jsx":"c7893b0280ed","components/forms/Switch.jsx":"b940839991bf","components/forms/Textarea.jsx":"1f6c8603940a","components/navigation/Breadcrumb.jsx":"8bc45bd2408c","components/navigation/Navbar.jsx":"8709f917186b","components/navigation/Tabs.jsx":"b77edd9c982e","doc-page.js":"371bab66f42d","slides/Slides.jsx":"5e61a7f1e3f8","social/Social.jsx":"3d1f6351fca9","ui_kits/marketing/ContactModal.jsx":"c6d45c3e9aac","ui_kits/marketing/Sections.jsx":"0c20b86d2d15"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEWWAVEDesignSystem_7c7a93 = window.NEWWAVEDesignSystem_7c7a93 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    bg: "var(--nw-tech-blue-100)",
    fg: "var(--nw-tech-blue)"
  },
  accent: {
    bg: "var(--nw-wave-blue-100)",
    fg: "var(--nw-wave-blue)"
  },
  cyan: {
    bg: "var(--nw-cyan-100)",
    fg: "var(--nw-cyan-600)"
  },
  success: {
    bg: "#d7f7ee",
    fg: "var(--nw-mint-600)"
  },
  warning: {
    bg: "#fff2d6",
    fg: "var(--nw-amber-600)"
  },
  danger: {
    bg: "#ffe1e4",
    fg: "var(--danger-fg)"
  },
  neutral: {
    bg: "var(--nw-slate-100)",
    fg: "var(--nw-slate-700)"
  }
};

/** Small status/label pill. */
function Badge({
  children,
  tone = "brand",
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--fw-semibold) 12px/1 var(--font-sans)",
      letterSpacing: "0.02em",
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      background: solid ? t.fg : t.bg,
      color: solid ? "#fff" : t.fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: solid ? "#fff" : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 88
};

/**
 * Renders a NEWWAVE brand feature icon (glassmorphic gradient PNG) from assets/icons.
 * Pass the icon file's base name (without .png), e.g. "Artificial Intelligence".
 */
function BrandIcon({
  name,
  size = "md",
  basePath = "assets/icons",
  alt,
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.md;
  const url = `${basePath}/${name}.png`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: alt || name,
    width: px,
    height: px,
    style: {
      width: px,
      height: px,
      objectFit: "contain",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { BrandIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    fontSize: 14,
    padding: "8px 16px",
    height: 36,
    gap: 6,
    radius: "var(--radius-control)"
  },
  md: {
    fontSize: 15,
    padding: "11px 22px",
    height: 44,
    gap: 8,
    radius: "var(--radius-control)"
  },
  lg: {
    fontSize: 17,
    padding: "15px 30px",
    height: 54,
    gap: 10,
    radius: "12px"
  }
};
const palettes = {
  primary: {
    background: "var(--nw-tech-blue)",
    color: "#fff",
    border: "1px solid var(--nw-tech-blue)",
    hoverBg: "var(--nw-tech-blue-600)",
    shadow: "var(--shadow-sm)",
    hoverShadow: "var(--shadow-brand)"
  },
  accent: {
    background: "var(--nw-wave-blue)",
    color: "#fff",
    border: "1px solid var(--nw-wave-blue)",
    hoverBg: "var(--nw-wave-blue-600)",
    shadow: "var(--shadow-sm)",
    hoverShadow: "var(--shadow-brand)"
  },
  gradient: {
    background: "var(--nw-gradient)",
    color: "#fff",
    border: "1px solid transparent",
    hoverBg: "var(--nw-gradient)",
    shadow: "var(--shadow-brand)",
    hoverShadow: "var(--shadow-cyan)"
  },
  secondary: {
    background: "#fff",
    color: "var(--nw-tech-blue)",
    border: "1px solid var(--border-default)",
    hoverBg: "var(--nw-slate-50)",
    shadow: "none",
    hoverShadow: "var(--shadow-sm)",
    hoverBorder: "var(--nw-wave-blue)"
  },
  ghost: {
    background: "transparent",
    color: "var(--nw-wave-blue)",
    border: "1px solid transparent",
    hoverBg: "var(--nw-wave-blue-100)",
    shadow: "none",
    hoverShadow: "none"
  }
};

/**
 * Primary NEWWAVE action button.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const p = palettes[variant] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const on = hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      font: `var(--fw-semibold) ${s.fontSize}px/1 var(--font-sans)`,
      letterSpacing: "0.01em",
      padding: s.padding,
      minHeight: s.height,
      width: fullWidth ? "100%" : "auto",
      background: on && p.hoverBg ? p.hoverBg : p.background,
      color: p.color,
      border: on && p.hoverBorder ? `1px solid ${p.hoverBorder}` : p.border,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: on ? p.hoverShadow : p.shadow,
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? "scale(0.98)" : "scale(1)",
      transition: "background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. */
function Card({
  children,
  padding = 24,
  interactive = false,
  gradient = false,
  glass = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    borderRadius: "var(--radius-card)",
    padding,
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)"
  };
  let skin;
  if (gradient) {
    skin = {
      background: "var(--nw-gradient-ink)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-md)"
    };
  } else if (glass) {
    skin = {
      background: "var(--glass-bg)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      border: "1px solid var(--glass-border)",
      boxShadow: "var(--shadow-md)"
    };
  } else {
    skin = {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: hover && interactive ? "var(--shadow-lg)" : "var(--shadow-sm)"
    };
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...skin,
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-4px)" : "translateY(0)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Applies the signature Tech Blue → Wave Blue → Cyan gradient to text. */
function GradientText({
  children,
  as = "span",
  gradient = "var(--nw-gradient)",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: gradient,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};
const palettes = {
  primary: {
    bg: "var(--nw-tech-blue)",
    fg: "#fff",
    hoverBg: "var(--nw-tech-blue-600)",
    border: "transparent"
  },
  accent: {
    bg: "var(--nw-wave-blue)",
    fg: "#fff",
    hoverBg: "var(--nw-wave-blue-600)",
    border: "transparent"
  },
  soft: {
    bg: "var(--nw-wave-blue-100)",
    fg: "var(--nw-wave-blue)",
    hoverBg: "var(--nw-wave-blue-200)",
    border: "transparent"
  },
  outline: {
    bg: "#fff",
    fg: "var(--nw-tech-blue)",
    hoverBg: "var(--nw-slate-50)",
    border: "var(--border-default)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--nw-slate-600)",
    hoverBg: "var(--nw-slate-100)",
    border: "transparent"
  }
};

/** Square icon-only button. */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const p = palettes[variant] || palettes.ghost;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      padding: 0,
      borderRadius: "var(--radius-control)",
      background: hover && !disabled ? p.hoverBg : p.bg,
      color: p.fg,
      border: `1px solid ${p.border === "transparent" ? "transparent" : "var(--border-default)"}`,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transform: active && !disabled ? "scale(0.94)" : "scale(1)",
      transition: "background var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Maps semantic variant -> shipped PNG in assets/logo/.
// PNG (not SVG): the supplied SVGs reference .cls-* classes with no <style> block, so they render solid black.
const FILES = {
  "primary-color": "primary-color.png",
  "primary-white": "primary-white.png",
  "primary-vertical": "primary-vertical.png",
  "primary-negative-white": "primary-negative-white.png",
  "primary-negative-black": "primary-negative-black.png",
  "primary-black": "primary-negative-black.png",
  "extended-color": "extended-color.png",
  "extended-white": "extended-white.png",
  "extended-vertical": "extended-vertical.png",
  "extended-negative-white": "extended-negative-white.png",
  "extended-negative-black": "extended-negative-black.png"
};

/**
 * NEWWAVE logo lockup. Renders the official SVG from the brand asset folder.
 * Set `basePath` to the location of assets/logo relative to the page.
 */
function Logo({
  variant = "primary-color",
  height = 32,
  basePath = "assets/logo",
  src,
  alt = "NEWWAVE",
  style,
  ...rest
}) {
  const url = src || `${basePath}/${FILES[variant] || FILES["primary-color"]}`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** KPI / statistic card with large tabular number. */
function StatCard({
  value,
  label,
  delta,
  deltaTone = "success",
  icon,
  gradient = false,
  style,
  ...rest
}) {
  const deltaColors = {
    success: "var(--nw-mint-600)",
    danger: "var(--danger-fg)",
    neutral: "var(--nw-slate-500)"
  };
  const fg = gradient ? "#fff" : "var(--text-strong)";
  const muted = gradient ? "rgba(255,255,255,.8)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 24,
      borderRadius: "var(--radius-card)",
      background: gradient ? "var(--nw-gradient-ink)" : "var(--surface-card)",
      border: gradient ? "1px solid transparent" : "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: muted
    }
  }, label), icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-extrabold) 38px/1 var(--font-display)",
      letterSpacing: "-0.02em",
      color: fg,
      fontVariantNumeric: "tabular-nums"
    }
  }, value), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: gradient ? "var(--nw-bright-cyan)" : deltaColors[deltaTone]
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable/selectable tag chip. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      font: "var(--fw-medium) 13px/1 var(--font-sans)",
      padding: "7px 12px",
      borderRadius: "var(--radius-pill)",
      cursor: onClick ? "pointer" : "default",
      background: selected ? "var(--nw-wave-blue)" : hover && onClick ? "var(--nw-slate-100)" : "var(--nw-slate-50)",
      color: selected ? "#fff" : "var(--nw-slate-700)",
      border: `1px solid ${selected ? "var(--nw-wave-blue)" : "var(--border-subtle)"}`,
      transition: "all var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0,
      lineHeight: 0,
      color: selected ? "rgba(255,255,255,.85)" : "var(--nw-slate-500)",
      fontSize: 15
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/WaveDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand wave texture divider (CSS-drawn approximation of the Filled/Outlined
 * Wave motif). Use as a section transition, footer top edge, or framing shape.
 */
function WaveDivider({
  variant = "filled",
  flip = false,
  height = 80,
  color = "var(--nw-wave-blue)",
  background = "transparent",
  style,
  ...rest
}) {
  const filled = /*#__PURE__*/React.createElement("path", {
    d: "M0,64 C240,20 480,20 720,52 C960,84 1200,84 1440,44 L1440,120 L0,120 Z",
    fill: color,
    opacity: variant === "filled" ? 1 : 0
  });
  const line1 = /*#__PURE__*/React.createElement("path", {
    d: "M0,70 C240,26 480,26 720,58 C960,90 1200,90 1440,50",
    fill: "none",
    stroke: color,
    strokeWidth: "3",
    opacity: variant === "outlined" ? 0.9 : 0
  });
  const line2 = /*#__PURE__*/React.createElement("path", {
    d: "M0,88 C240,46 480,46 720,76 C960,104 1200,104 1440,68",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    opacity: variant === "outlined" ? 0.45 : 0
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background,
      lineHeight: 0,
      transform: flip ? "scaleY(-1)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 120",
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, filled, line1, line2));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    bg: "var(--nw-light-blue)",
    border: "var(--nw-cloud-blue)",
    fg: "var(--nw-tech-blue)",
    icon: "i"
  },
  success: {
    bg: "#e2f9f2",
    border: "var(--nw-mint)",
    fg: "var(--nw-mint-600)",
    icon: "✓"
  },
  warning: {
    bg: "#fff5e0",
    border: "var(--nw-amber)",
    fg: "var(--nw-amber-600)",
    icon: "!"
  },
  danger: {
    bg: "#ffe8ea",
    border: "var(--danger)",
    fg: "var(--danger-fg)",
    icon: "!"
  }
};

/** Inline banner message. */
function Alert({
  children,
  title,
  tone = "info",
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      borderRadius: "var(--radius-md)",
      background: t.bg,
      border: `1px solid ${t.border}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: t.fg,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-bold) 13px/1 var(--font-sans)"
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 14px/1.4 var(--font-sans)",
      color: "var(--text-strong)",
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 14px/1.5 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--nw-slate-500)",
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      alignSelf: "flex-start"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Linear progress bar. */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  gradient = true,
  height = 8,
  tone = "accent",
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = gradient ? "var(--nw-gradient-soft)" : tone === "success" ? "var(--nw-mint)" : tone === "cyan" ? "var(--nw-bright-cyan)" : "var(--nw-wave-blue)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--fw-medium) 13px/1 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-muted)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      width: "100%",
      height,
      borderRadius: "var(--radius-pill)",
      background: "var(--nw-slate-200)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: fill,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinning loader. */
function Spinner({
  size = 24,
  thickness = 3,
  color = "var(--nw-wave-blue)",
  track = "var(--nw-slate-200)",
  label = "Loading",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      boxSizing: "border-box",
      border: `${thickness}px solid ${track}`,
      borderTopColor: color,
      animation: "nw-spin .7s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes nw-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus tooltip. */
function Tooltip({
  children,
  content,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 20,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      padding: "7px 11px",
      borderRadius: "var(--radius-sm)",
      background: "var(--nw-ink)",
      color: "#fff",
      font: "var(--fw-medium) 12px/1.3 var(--font-sans)",
      boxShadow: "var(--shadow-md)",
      opacity: show ? 1 : 0,
      transform: `${pos.transform} translateY(${show ? "0" : "2px"})`,
      transition: "opacity var(--dur-fast) var(--ease-standard)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 6,
      background: on ? "var(--nw-wave-blue)" : "#fff",
      border: `1.5px solid ${on ? "var(--nw-wave-blue)" : "var(--border-strong)"}`,
      transition: "all var(--dur-fast) var(--ease-standard)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.6L9.5 3.4",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: "inherit"
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 14px/1.4 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, hint and error states. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = "md",
  disabled = false,
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const h = size === "sm" ? 38 : size === "lg" ? 52 : 44;
  const borderColor = error ? "var(--danger-fg)" : focus ? "var(--nw-wave-blue)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "inline-flex",
      color: "var(--nw-slate-500)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: h,
      boxSizing: "border-box",
      padding: iconLeft ? "0 14px 0 38px" : "0 14px",
      font: "var(--fw-regular) 15px/1 var(--font-sans)",
      color: "var(--text-strong)",
      background: disabled ? "var(--nw-slate-50)" : "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus && !error ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 12px/1.4 var(--font-sans)",
      color: error ? "var(--danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with label. Use inside a shared-name group. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "50%",
      background: "#fff",
      border: `1.5px solid ${on ? "var(--nw-wave-blue)" : "var(--border-strong)"}`,
      transition: "all var(--dur-fast) var(--ease-standard)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--nw-wave-blue)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: "inherit"
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 14px/1.4 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select. */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  disabled = false,
  id,
  value,
  onChange,
  size = "md",
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const h = size === "sm" ? 38 : size === "lg" ? 52 : 44;
  const borderColor = error ? "var(--danger-fg)" : focus ? "var(--nw-wave-blue)" : "var(--border-default)";
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: h,
      boxSizing: "border-box",
      padding: "0 38px 0 14px",
      appearance: "none",
      font: "var(--fw-regular) 15px/1 var(--font-sans)",
      color: value ? "var(--text-strong)" : "var(--nw-slate-500)",
      background: disabled ? "var(--nw-slate-50)" : "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus && !error ? "var(--focus-ring)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--nw-slate-500)",
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 12px/1.4 var(--font-sans)",
      color: error ? "var(--danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off toggle switch. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const fid = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: fid,
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: "relative",
      width: 42,
      height: 24,
      flexShrink: 0,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "inherit",
      background: on ? "var(--nw-wave-blue)" : "var(--nw-slate-300)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 14px/1.4 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const borderColor = error ? "var(--danger-fg)" : focus ? "var(--nw-wave-blue)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 14px",
      resize: "vertical",
      font: "var(--fw-regular) 15px/1.6 var(--font-sans)",
      color: "var(--text-strong)",
      background: disabled ? "var(--nw-slate-50)" : "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus && !error ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) 12px/1.4 var(--font-sans)",
      color: error ? "var(--danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumb trail. */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        font: `${last ? "var(--fw-semibold)" : "var(--fw-medium)"} 14px/1 var(--font-sans)`,
        color: last ? "var(--text-strong)" : "var(--text-muted)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        font: "var(--fw-medium) 14px/1 var(--font-sans)",
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--nw-slate-400)",
        fontSize: 13
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top navigation bar with logo, links and CTA. */
function Navbar({
  links = [],
  activeHref,
  cta,
  logoBasePath = "assets/logo",
  transparent = false,
  style,
  ...rest
}) {
  const [scrolled] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "14px 32px",
      width: "100%",
      boxSizing: "border-box",
      background: transparent ? "transparent" : "var(--glass-bg)",
      backdropFilter: transparent ? "none" : "var(--glass-blur)",
      WebkitBackdropFilter: transparent ? "none" : "var(--glass-blur)",
      borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: transparent ? "primary-white" : "primary-color",
    height: 30,
    basePath: logoBasePath
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map(l => {
    const active = l.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href,
      style: {
        font: `${active ? "var(--fw-bold)" : "var(--fw-medium)"} 15px/1 var(--font-sans)`,
        color: active ? transparent ? "#fff" : "var(--nw-tech-blue)" : transparent ? "rgba(255,255,255,.82)" : "var(--text-body)",
        textDecoration: "none",
        position: "relative",
        paddingBottom: 4,
        borderBottom: active ? "2px solid var(--nw-wave-blue)" : "2px solid transparent"
      }
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, cta || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gradient",
    size: "sm"
  }, "Contact us")));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal tabs. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        background: "none",
        padding: "12px 16px",
        marginBottom: -1,
        cursor: "pointer",
        font: `${on ? "var(--fw-bold)" : "var(--fw-medium)"} 15px/1 var(--font-sans)`,
        color: on ? "var(--nw-tech-blue)" : "var(--text-muted)",
        borderBottom: `2px solid ${on ? "var(--nw-wave-blue)" : "transparent"}`,
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-semibold) 11px/1 var(--font-sans)",
        padding: "3px 7px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--nw-wave-blue-100)" : "var(--nw-slate-100)",
        color: on ? "var(--nw-wave-blue)" : "var(--nw-slate-500)"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
// NEWWAVE presentation slides (16:9, 1280x720 coordinate space). Matches brand social/deck samples.
const {
  GradientText,
  BrandIcon,
  Logo
} = window.NEWWAVEDesignSystem_7c7a93;
const ICONS = "../assets/icons";
const LOGO = "../assets/logo";

// ---- shared decorative pieces ----
function RingBg({
  color = "rgba(255,255,255,.08)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1280 720",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    "aria-hidden": "true"
  }, [220, 360, 500, 640].map(r => /*#__PURE__*/React.createElement("circle", {
    key: r,
    cx: "120",
    cy: "360",
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5"
  })));
}
function Streaks() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(95deg, rgba(255,255,255,.05) 0 2px, transparent 2px 60px)",
      mixBlendMode: "screen"
    },
    "aria-hidden": "true"
  });
}
function GlassCard({
  children,
  style,
  glow = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "translate(6px,8px)",
      borderRadius: 22,
      background: "linear-gradient(135deg,#3FE7FF,#006BFF)",
      opacity: .9,
      filter: "blur(1px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      borderRadius: 22,
      background: "rgba(255,255,255,.92)",
      border: "1px solid rgba(255,255,255,.7)",
      boxShadow: "0 20px 50px rgba(0,20,80,.22)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 28,
      boxSizing: "border-box"
    }
  }, children));
}
function GlassCircle({
  icon,
  size = 96
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "rgba(255,255,255,.16)",
      border: "1px solid rgba(255,255,255,.35)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      boxShadow: "0 10px 30px rgba(0,20,80,.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: icon,
    size: Math.round(size * 0.5),
    basePath: ICONS
  }));
}
function BrandLogo({
  height = 30,
  plate = false
}) {
  return /*#__PURE__*/React.createElement(Logo, {
    variant: plate ? "primary-white" : "primary-color",
    height: height,
    basePath: LOGO
  });
}
function PageNum({
  n,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      right: 52,
      font: "var(--fw-semibold) 20px/1 var(--font-mono)",
      color: dark ? "rgba(255,255,255,.75)" : "var(--nw-tech-blue)"
    }
  }, n);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 22px",
      borderRadius: 999,
      border: "1.5px solid rgba(63,231,255,.6)",
      background: "rgba(63,231,255,.10)",
      font: "var(--fw-semibold) 17px/1 var(--font-sans)",
      color: "#fff"
    }
  }, children);
}
const FRAME = {
  position: "relative",
  width: 1280,
  height: 720,
  overflow: "hidden",
  fontFamily: "var(--font-sans)",
  color: "#fff"
};
const DARK_BG = "radial-gradient(1100px 700px at 78% -10%, #0a52d6 0%, transparent 55%), radial-gradient(900px 900px at 15% 120%, #0047c4 0%, transparent 55%), linear-gradient(135deg,#001a5e 0%,#002B9C 55%,#0038c4 100%)";
const LIGHT_BG = "radial-gradient(900px 700px at 85% 30%, #b9e0ff 0%, transparent 60%), linear-gradient(120deg,#eaf5ff 0%,#d3ecff 100%)";

// ---- Slide types ----
function TitleSlide({
  eyebrow = "Digital growth partner",
  title = ["Ride the ", "new wave"],
  subtitle = "Custom software, AI & cloud solutions engineered for enterprises that scale globally.",
  n = "01"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: DARK_BG
    }
  }, /*#__PURE__*/React.createElement(RingBg, null), /*#__PURE__*/React.createElement(Streaks, null), /*#__PURE__*/React.createElement(PageNum, {
    n: n,
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 54,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 34,
    plate: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 0,
      bottom: 0,
      right: 64,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 18px/1 var(--font-sans)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--nw-bright-cyan)",
      marginBottom: 22
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-extrabold) 84px/1.02 var(--font-display)",
      letterSpacing: "-0.03em",
      margin: 0,
      color: "#fff"
    }
  }, title[0], /*#__PURE__*/React.createElement(GradientText, {
    gradient: "linear-gradient(100deg,#3FE7FF,#8be6ff)"
  }, title[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 24px/1.55 var(--font-sans)",
      color: "rgba(255,255,255,.82)",
      margin: "26px 0 0",
      maxWidth: 640
    }
  }, subtitle)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1280 220",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      bottom: -2,
      left: 0,
      width: "100%",
      height: 200
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,150 C300,90 560,90 760,120 C980,152 1120,150 1280,110 L1280,220 L0,220 Z",
    fill: "rgba(63,231,255,.12)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,175 C300,120 560,120 760,150 C980,180 1120,178 1280,140",
    fill: "none",
    stroke: "rgba(63,231,255,.55)",
    strokeWidth: "2"
  })));
}
function StatementSlide({
  heading = ["Security built into ", "every layer"],
  body = "From encrypted data protection to continuous monitoring, we safeguard your product so you can focus on growth with confidence.",
  tagline = "Your data is your business. We help you protect it.",
  icon = "Secure Privacy",
  n = "02"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: DARK_BG
    }
  }, /*#__PURE__*/React.createElement(RingBg, null), /*#__PURE__*/React.createElement(PageNum, {
    n: n,
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 48,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 30,
    plate: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 150,
      width: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 56px/1.1 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#fff"
    }
  }, heading[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nw-bright-cyan)"
    }
  }, heading[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 23px/1.6 var(--font-sans)",
      color: "rgba(255,255,255,.8)",
      margin: "26px 0 40px",
      maxWidth: 640
    }
  }, body), /*#__PURE__*/React.createElement(Pill, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "Secure Privacy",
    size: 26,
    basePath: ICONS
  })), tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 96,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      filter: "drop-shadow(0 30px 60px rgba(0,20,80,.5))"
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: icon,
    size: 300,
    basePath: ICONS
  }))));
}
function BigStatSlide({
  stat = "58%",
  caption = ["Increase in Early", "Diagnostic Accuracy"],
  side = [{
    v: "30%",
    pos: "bl"
  }, {
    v: "45%",
    pos: "tr"
  }],
  n = "03"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: "radial-gradient(700px 700px at 50% 45%, #1a6bff 0%, #0043c8 60%, #002B9C 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 48,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 30,
    plate: true
  })), /*#__PURE__*/React.createElement(PageNum, {
    n: n,
    dark: true
  }), side.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      ...(s.pos === "tr" ? {
        top: 150,
        right: 120
      } : {
        bottom: 150,
        left: 120
      }),
      width: 150,
      height: 130,
      borderRadius: 20,
      background: "rgba(255,255,255,.14)",
      border: "1px solid rgba(255,255,255,.3)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-bold) 44px/1 var(--font-display)",
      color: "#fff"
    }
  }, s.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 220px/0.9 var(--font-display)",
      letterSpacing: "-0.04em",
      fontVariantNumeric: "tabular-nums"
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 46px/1.15 var(--font-display)",
      marginTop: 14
    }
  }, caption[0], /*#__PURE__*/React.createElement("br", null), caption[1])));
}
function FeatureSlide({
  title = ["Smart", "Delivery", "Real Impact"],
  items = [{
    icon: "Framework",
    label: ["Engineering", "Excellence"]
  }, {
    icon: "Progress Bars",
    label: ["Measurable", "Outcomes"]
  }, {
    icon: "Support",
    label: ["Dedicated", "Support"]
  }],
  n = "04"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: LIGHT_BG,
      color: "var(--nw-tech-blue)"
    }
  }, /*#__PURE__*/React.createElement(PageNum, {
    n: n
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 48,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 190,
      width: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-extrabold) 76px/1.02 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: 0,
      textTransform: "uppercase",
      color: "#fff",
      textShadow: "0 2px 20px rgba(0,60,180,.25)"
    }
  }, title.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 3,
      background: "var(--nw-tech-blue)",
      marginTop: 26,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 120,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 44
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      marginLeft: i === 1 ? 60 : 0
    }
  }, /*#__PURE__*/React.createElement(GlassCircle, {
    icon: it.icon,
    size: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 30px/1.15 var(--font-display)",
      color: "#fff"
    }
  }, it.label[0], /*#__PURE__*/React.createElement("br", null), it.label[1])))));
}
function QuoteSlide({
  quote = "NEWWAVE is the silent infrastructure that lets our team focus on what matters while delivery stays on autopilot.",
  stat = "6M+",
  statLabel = "engineering hours delivered",
  author = "VP Engineering, Global Fintech",
  body = "The transition from reactive firefighting to predictive delivery has completely changed how we ship. Releases that took quarters now take weeks — with fewer regressions and far less stress across the team.",
  n = "05"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: "#fff",
      color: "var(--nw-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 512,
      background: DARK_BG,
      color: "#fff",
      padding: "56px 52px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    height: 30,
    plate: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 90px/0.6 var(--font-display)",
      color: "var(--nw-bright-cyan)",
      height: 40
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-medium) 30px/1.4 var(--font-display)",
      margin: "0 0 8px"
    }
  }, quote)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 64px/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums"
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "16px/1.4 var(--font-sans)",
      color: "rgba(255,255,255,.75)",
      marginTop: 6
    }
  }, statLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 512,
      right: 0,
      top: 0,
      bottom: 0,
      padding: "56px 64px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 320px",
      borderRadius: 18,
      background: "linear-gradient(135deg,#cfe6ff,#eaf4ff)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--nw-slate-500)",
      font: "var(--fw-semibold) 15px/1.4 var(--font-sans)",
      textAlign: "center"
    }
  }, "Client / team photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 18px/1.3 var(--font-sans)",
      color: "var(--nw-tech-blue)",
      margin: "26px 0 12px"
    }
  }, author), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 19px/1.65 var(--font-sans)",
      color: "var(--text-body)",
      margin: 0
    }
  }, body)));
}
Object.assign(window, {
  NWTitleSlide: TitleSlide,
  NWStatementSlide: StatementSlide,
  NWBigStatSlide: BigStatSlide,
  NWFeatureSlide: FeatureSlide,
  NWQuoteSlide: QuoteSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// social/Social.jsx
try { (() => {
// NEWWAVE social media templates (1:1, 1080x1080). Matches brand carousel/post samples.
const {
  GradientText,
  BrandIcon,
  Logo
} = window.NEWWAVEDesignSystem_7c7a93;
const ICONS = "../assets/icons";
const LOGO = "../assets/logo";
function Rings({
  color = "rgba(255,255,255,.07)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1080 1080",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    "aria-hidden": "true"
  }, [300, 460, 620, 780].map(r => /*#__PURE__*/React.createElement("circle", {
    key: r,
    cx: "120",
    cy: "540",
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5"
  })));
}
function ArrowPill({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 60,
      right: 60,
      width: 96,
      height: 60,
      borderRadius: 999,
      background: dark ? "rgba(255,255,255,.14)" : "var(--nw-tech-blue)",
      border: dark ? "1px solid rgba(255,255,255,.4)" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 30
    }
  }, "\u2192");
}
function GlowCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "translate(-8px,8px)",
      borderRadius: 24,
      background: "linear-gradient(160deg,#3FE7FF,#006BFF)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      borderRadius: 24,
      background: "rgba(255,255,255,.95)",
      boxShadow: "0 20px 50px rgba(0,20,80,.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 34,
      boxSizing: "border-box",
      textAlign: "center"
    }
  }, children));
}
const FRAME = {
  position: "relative",
  width: 1080,
  height: 1080,
  overflow: "hidden",
  fontFamily: "var(--font-sans)"
};
const DARK = "radial-gradient(700px 900px at 20% 10%, #0a52d6 0%, transparent 55%), linear-gradient(160deg,#001a5e 0%,#002B9C 55%,#0038c4 100%)";
const LIGHT = "radial-gradient(700px 700px at 80% 20%, #cfe8ff 0%, transparent 60%), linear-gradient(150deg,#f2f8ff 0%,#dcefff 100%)";

// 1 — Hook / equation post (dark)
function HookPost({
  eyebrow = "The real question",
  title = "\u201CIs Your Dev Team AI-First\u201D",
  a = "More output per engineer",
  b = "AI-native outsourcing"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: DARK,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(92deg,rgba(255,255,255,.05) 0 2px,transparent 2px 70px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 70,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "extended-white",
    height: 54,
    basePath: LOGO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 200,
      left: 70,
      right: 70,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 62px/1.05 var(--font-display)",
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      color: "var(--nw-bright-cyan)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 62px/1.1 var(--font-display)",
      letterSpacing: "-0.01em",
      marginTop: 8
    }
  }, title)), /*#__PURE__*/React.createElement(GlowCard, {
    style: {
      position: "absolute",
      right: 130,
      top: 470,
      width: 330,
      height: 300
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 40px/1.15 var(--font-display)",
      color: "var(--nw-tech-blue)"
    }
  }, b)), /*#__PURE__*/React.createElement(GlowCard, {
    style: {
      position: "absolute",
      left: 130,
      top: 620,
      width: 330,
      height: 300
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 40px/1.15 var(--font-display)",
      color: "var(--nw-tech-blue)"
    }
  }, a)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 448,
      top: 700,
      width: 100,
      height: 100,
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      boxShadow: "0 12px 30px rgba(0,20,80,.3)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 5,
      background: "var(--nw-wave-blue)",
      borderRadius: 3,
      marginBottom: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 5,
      background: "var(--nw-wave-blue)",
      borderRadius: 3
    }
  }))), /*#__PURE__*/React.createElement(ArrowPill, {
    dark: true
  }));
}

// 2 — Quote post (light) with glass cubes
function QuotePost({
  q1 = "Manual UI testing",
  q2 = "was becoming too",
  q3 = "slow to scale",
  author = "Team Vanguard",
  role = "Award-winning Team in Hack-AI-thon"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: "linear-gradient(160deg,#f5faff,#e6f2ff)",
      color: "var(--nw-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 70,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary-color",
    height: 64,
    basePath: LOGO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 260,
      left: 90,
      right: 90
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-extrabold) 150px/0.5 var(--font-display)",
      color: "var(--nw-tech-blue)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 74px/1.08 var(--font-display)",
      letterSpacing: "-0.02em",
      color: "var(--nw-ink)",
      marginTop: -30
    }
  }, q1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 60px/1.12 var(--font-display)",
      color: "var(--nw-slate-700)",
      marginTop: 6
    }
  }, q2), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 74px/1.1 var(--font-display)",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nw-bright-cyan)"
    }
  }, "slow"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nw-wave-blue)"
    }
  }, "to scale"))), [[720, 560, 150, "rgba(0,107,255,.5)"], [860, 830, 130, "rgba(63,231,255,.5)"], [430, 800, 130, "rgba(0,107,255,.35)"]].map(([l, t, s, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: l,
      top: t,
      width: s,
      height: s,
      background: c,
      border: "1px solid rgba(255,255,255,.6)",
      borderRadius: 10,
      transform: "skewY(-8deg)",
      boxShadow: "0 20px 40px rgba(0,40,120,.2)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 90,
      bottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 34px/1 var(--font-display)",
      color: "var(--nw-cloud-blue)"
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) italic 24px/1.3 var(--font-sans)",
      color: "var(--nw-tech-blue)",
      marginTop: 10
    }
  }, role)));
}

// 3 — Contact / CTA post (light)
function ContactPost({
  pre = "Ready to scale",
  head = "with cloud foundation beyond migration",
  cta = "Explore Newwave Cloud Service!",
  web = "newwavesolution.com",
  email = "sales@newwavesolution.com",
  phone = "+84 98 531 0203"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: LIGHT,
      color: "var(--nw-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      right: 70
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary-color",
    height: 58,
    basePath: LOGO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 130,
      left: 80,
      right: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 46px/1.1 var(--font-display)",
      color: "var(--nw-ink)"
    }
  }, pre), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 76px/1.08 var(--font-display)",
      letterSpacing: "-0.02em",
      color: "var(--nw-wave-blue)",
      marginTop: 8
    }
  }, head)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 470,
      left: 80,
      display: "inline-flex",
      alignItems: "center",
      gap: 22,
      padding: "22px 30px",
      borderRadius: 999,
      background: "var(--nw-wave-blue)",
      color: "#fff",
      boxShadow: "var(--shadow-brand)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 34px/1 var(--font-sans)"
    }
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "#fff",
      color: "var(--nw-wave-blue)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 90,
      bottom: 130,
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, [["Integration", web], ["Send us a request", email], ["Support", phone]].map(([ic, tx], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: ic,
    size: 56,
    basePath: ICONS
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-medium) 34px/1 var(--font-sans)",
      color: "var(--nw-ink)"
    }
  }, tx)))));
}

// 4 — Photo statement post (full-bleed overlay)
function PhotoPost({
  lead = "Give them ",
  em1 = "quality.",
  mid = " That\u2019s the best kind of ",
  em2 = "service."
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: "linear-gradient(115deg,#0a2fa8 0%,#0a2fa8 42%,#1a4fd6 60%,#4d78e0 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "url('../assets/icons/landing09.png') right center/40% no-repeat",
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "56%",
      background: "linear-gradient(135deg,#dfeeff,#bcd8ff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--nw-slate-500)",
      font: "var(--fw-semibold) 20px/1.4 var(--font-sans)",
      textAlign: "center"
    }
  }, "Business / team photo", /*#__PURE__*/React.createElement("br", null), "(drop image here)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "extended-white",
    height: 48,
    basePath: LOGO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 70,
      bottom: 150,
      width: 460,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 66px/1.12 var(--font-display)",
      letterSpacing: "-0.02em"
    }
  }, lead, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nw-bright-cyan)"
    }
  }, em1), mid, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nw-bright-cyan)"
    }
  }, em2))));
}

// 5 — Stat post (dark radial)
function StatPost({
  stat = "58%",
  caption = "Increase in Early Diagnostic Accuracy",
  side = ["30%", "45%"]
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...FRAME,
      background: "radial-gradient(620px 620px at 50% 42%, #1a6bff 0%, #0043c8 62%, #002B9C 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      left: 60
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "extended-white",
    height: 42,
    basePath: LOGO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 260,
      right: 90,
      width: 150,
      height: 150,
      borderRadius: 22,
      background: "rgba(255,255,255,.14)",
      border: "1px solid rgba(255,255,255,.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-bold) 48px/1 var(--font-display)"
    }
  }, side[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 300,
      left: 70,
      width: 150,
      height: 150,
      borderRadius: 22,
      background: "rgba(255,255,255,.12)",
      border: "1px solid rgba(255,255,255,.28)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-bold) 48px/1 var(--font-display)"
    }
  }, side[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 300px/0.85 var(--font-display)",
      letterSpacing: "-0.04em",
      fontVariantNumeric: "tabular-nums"
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 56px/1.15 var(--font-display)",
      marginTop: 20
    }
  }, caption)));
}
Object.assign(window, {
  NWHookPost: HookPost,
  NWQuotePost: QuotePost,
  NWContactPost: ContactPost,
  NWPhotoPost: PhotoPost,
  NWStatPost: StatPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "social/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ContactModal.jsx
try { (() => {
// Contact modal for the marketing kit.
const {
  Button,
  Input,
  Select,
  Textarea,
  Alert,
  IconButton
} = window.NEWWAVEDesignSystem_7c7a93;
function ContactModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(10,19,48,.55)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 480,
      background: "#fff",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-xl)",
      padding: 32,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 26px/1.2 var(--font-display)",
      margin: "0 0 12px",
      color: "var(--text-strong)"
    }
  }, "Thanks \u2014 we're on it"), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Request received"
  }, "A NEWWAVE solutions lead will reply within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    style: {
      marginTop: 20
    },
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 26px/1.2 var(--font-display)",
      margin: "0 0 4px",
      color: "var(--text-strong)"
    }
  }, "Start your project"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "15px/1.5 var(--font-sans)",
      color: "var(--text-muted)",
      margin: "0 0 22px"
    }
  }, "Tell us a little about what you're building."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Tran"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    placeholder: "Choose one",
    options: ["Custom software", "AI / ML", "DevOps & Cloud", "Staff augmentation", "MVP development"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project brief",
    rows: 3,
    placeholder: "Goals, timeline, team size\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send request")))));
}
window.NWContactModal = ContactModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ContactModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
// NEWWAVE marketing site — section components. Exposes all to window for the index shell.
const {
  Button,
  Badge,
  Card,
  StatCard,
  GradientText,
  BrandIcon,
  Logo,
  Navbar,
  WaveDivider,
  Input,
  Select,
  Textarea,
  Alert,
  Tag
} = window.NEWWAVEDesignSystem_7c7a93;
const ICONS = "../../assets/icons";
const LOGO = "../../assets/logo";
const SERVICES = [{
  icon: "Custom Elearning Development",
  title: "Custom Software",
  body: "Web, mobile and enterprise platforms engineered for scale and reliability."
}, {
  icon: "Artificial Intelligence",
  title: "AI & Machine Learning",
  body: "Chatbots, voice recognition and predictive models embedded into your products."
}, {
  icon: "DevOps",
  title: "DevOps & Cloud",
  body: "CI/CD pipelines, AWS & Azure operations and zero-downtime releases."
}, {
  icon: "Staff Augmentation",
  title: "Staff Augmentation",
  body: "Vetted engineers who plug straight into your team, on-demand."
}, {
  icon: "MVP Development",
  title: "MVP Development",
  body: "From define-idea to launch — validated products in weeks, not quarters."
}, {
  icon: "Data Migration",
  title: "Data & Integration",
  body: "Secure migrations and system integrations with zero data loss."
}];
const STATS = [{
  value: "15+",
  label: "Years in tech"
}, {
  value: "600+",
  label: "IT experts"
}, {
  value: "1.2M",
  label: "Hours delivered"
}, {
  value: "30+",
  label: "Partner nations"
}];
const STEPS = [{
  icon: "Define Idea",
  title: "Define",
  body: "We align on goals, scope and success metrics."
}, {
  icon: "Ideate",
  title: "Ideate",
  body: "Architecture, UX and a delivery roadmap."
}, {
  icon: "Build",
  title: "Build",
  body: "Agile sprints with continuous demos."
}, {
  icon: "Launch",
  title: "Launch",
  body: "Ship, monitor and scale with confidence."
}];
function Eyebrow({
  children,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 13px/1 var(--font-sans)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: light ? "var(--nw-bright-cyan)" : "var(--nw-wave-blue)",
      marginBottom: 16
    }
  }, children);
}
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--nw-gradient-ink)",
      color: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(1200px 500px at 80% -10%, rgba(63,231,255,.35), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1200,
      margin: "0 auto",
      padding: "96px 32px 120px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan",
    style: {
      background: "rgba(63,231,255,.16)",
      color: "var(--nw-bright-cyan)"
    }
  }, "Digital growth partner \xB7 Since 2011"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-extrabold) 60px/1.04 var(--font-display)",
      letterSpacing: "-0.03em",
      margin: "20px 0 0",
      maxWidth: 820,
      color: "#FFFFFF"
    }
  }, "Ride the ", /*#__PURE__*/React.createElement(GradientText, {
    gradient: "linear-gradient(100deg,#3FE7FF,#8be6ff)"
  }, "new wave"), " of digital growth"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 20px/1.6 var(--font-sans)",
      color: "rgba(255,255,255,.82)",
      maxWidth: 620,
      margin: "22px 0 36px"
    }
  }, "NEWWAVE builds custom software, AI and cloud solutions that enterprises trust \u2014 clear, structured and engineered to scale globally."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    onClick: onContact
  }, "Start your project"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: "rgba(255,255,255,.08)",
      color: "#fff",
      borderColor: "rgba(255,255,255,.35)"
    }
  }, "Explore services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      marginTop: 64,
      flexWrap: "wrap"
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-extrabold) 40px/1 var(--font-display)",
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-medium) 14px/1.4 var(--font-sans)",
      color: "rgba(255,255,255,.7)",
      marginTop: 6
    }
  }, s.label))))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 120",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      bottom: -1,
      left: 0,
      width: "100%",
      height: 90,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,80 C240,30 480,30 720,62 C960,94 1200,94 1440,54 L1440,120 L0,120 Z",
    fill: "var(--surface-page)"
  })));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 640,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 40px/1.12 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "End-to-end technology services"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "18px/1.6 var(--font-sans)",
      color: "var(--text-muted)",
      marginTop: 14
    }
  }, "One partner across the whole product lifecycle \u2014 from idea to launch and beyond.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    padding: 28
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: s.icon,
    size: "xl",
    basePath: ICONS
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-bold) 20px/1.3 var(--font-display)",
      margin: "18px 0 8px",
      color: "var(--text-strong)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "15px/1.6 var(--font-sans)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.body)))));
}
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 36px/1.14 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "A clear path from idea to impact")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: s.icon,
    size: "lg",
    basePath: ICONS
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-extrabold) 14px/1 var(--font-mono)",
      color: "var(--nw-wave-blue)"
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-bold) 19px/1.3 var(--font-display)",
      margin: "0 0 6px",
      color: "var(--text-strong)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "14px/1.6 var(--font-sans)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.body))))));
}
function CTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    gradient: true,
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 48px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-bold) 34px/1.15 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: "0 0 12px",
      color: "#fff"
    }
  }, "Let's build your next wave"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "17px/1.6 var(--font-sans)",
      color: "rgba(255,255,255,.8)",
      margin: "0 0 28px",
      maxWidth: 420
    }
  }, "Tell us about your goals and we'll reply within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    onClick: onContact
  }, "Contact us"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: "transparent",
      color: "#fff",
      borderColor: "rgba(255,255,255,.4)"
    }
  }, "Book a call"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(400px 240px at 70% 40%, rgba(63,231,255,.5), transparent 70%)"
    }
  })))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--nw-ink)",
      color: "rgba(255,255,255,.72)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "56px 32px 40px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary-white",
    height: 30,
    basePath: LOGO
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "14px/1.6 var(--font-sans)",
      marginTop: 16
    }
  }, "A digital growth partner delivering custom software, AI and cloud solutions to global enterprises.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, [["Services", ["Custom Software", "AI & ML", "DevOps", "Staffing"]], ["Company", ["About", "Industries", "Insights", "Careers"]], ["Contact", ["hello@newwave.com", "+84 24 3200 0000", "Hanoi · Tokyo · SF"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 13px/1 var(--font-sans)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: 14
    }
  }, h), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      font: "14px/2.1 var(--font-sans)"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.1)",
      padding: "18px 32px",
      textAlign: "center",
      font: "13px/1.5 var(--font-sans)",
      color: "rgba(255,255,255,.5)"
    }
  }, "\xA9 2026 NEWWAVE. All rights reserved."));
}
Object.assign(window, {
  NWHero: Hero,
  NWServices: Services,
  NWProcess: Process,
  NWCTA: CTA,
  NWFooter: Footer,
  NWNavLinks: [{
    label: "Services",
    href: "#services"
  }, {
    label: "How we work",
    href: "#process"
  }, {
    label: "Industries",
    href: "#"
  }, {
    label: "Insights",
    href: "#"
  }]
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandIcon = __ds_scope.BrandIcon;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
