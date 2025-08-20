# PerpsKit CDN Distribution

This repository contains the built distribution files for PerpsKit - a perpetual futures trading widget toolkit.

## 🚀 CDN Usage

### jsDelivr (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/perpskit/perpskit-cdn@v1.0.0/widget.iife.js"></script>
```

### Direct GitHub
```html
<script src="https://github.com/perpskit/perpskit-cdn/releases/download/v1.0.0/widget.iife.js"></script>
```

## 📦 Integration

```html
<div id="trading-widget"></div>
<script src="https://cdn.jsdelivr.net/gh/perpskit/perpskit-cdn@v1.0.0/widget.iife.js"></script>
<script>
  const widget = PerpsKit.mount('#trading-widget', {
    builder: 'your-builder-address',
    theme: 'dark',
    symbol: 'ETH-USD',
    fee: 0.1
  });
</script>
```

## 📊 Bundle Information

- **Size**: ~16MB (includes TradingView charting library)
- **Dependencies**: React, TradingView, Wallet connectors
- **Compatibility**: Modern browsers with ES2020 support

## 🔗 Links

- **Website**: [hyperliquid.xyz](https://hyperliquid.xyz)
- **Documentation**: Full integration docs available in the main repository

## 📄 License

MIT License
