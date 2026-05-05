import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CATALOG_URL = 'https://guiademaquinasferrasoldas.vercel.app';

function CatalogApp() {
  const insets = useSafeAreaInsets();

  const [showSplash, setShowSplash] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [webViewLoading, setWebViewLoading] = useState(true);

  const splashOpacity = useRef(new Animated.Value(1)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    checkConnection();

    const timer = setTimeout(() => {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  async function checkConnection() {
    try {
      const response = await fetch(CATALOG_URL, { method: 'HEAD' });
      setIsOnline(response.ok);
    } catch {
      setIsOnline(false);
    }
  }

  const offlineHTML = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
          background: #1a1a1a;
          color: #fff;
          font-family: sans-serif;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          text-align: center;
        }
        .icon { font-size: 48px; }
        h2 { color: #ffcc00; font-size: 20px; }
        p { color: #aaa; font-size: 14px; line-height: 1.6; }
        .badge {
          background: rgba(255,204,0,0.15);
          border: 1px solid #ffcc00;
          color: #ffcc00;
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 13px;
          margin-top: 8px;
        }
      </style>
    </head>
    <body>
      <div class="icon">📡</div>
      <h2>Sem conexão com a internet</h2>
      <p>Conecte-se à internet para acessar o catálogo completo da Ferrasoldas.</p>
      <div class="badge">⚡ Modo offline</div>
    </body>
    </html>
  `;


  const injectedJS = `
    (function() {
      // Aguarda o flipbook carregar
      setTimeout(() => {
        const controls = document.querySelector('.controls-bar');
        if (controls) {
          controls.style.marginBottom = '${insets.bottom + 16}px';
        }
        const header = document.querySelector('.main-header');
        if (header) {
          header.style.marginTop = '${insets.top}px';
        }
      }, 1000);
    })();
    true;
  `;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <StatusBar style="light" backgroundColor="#1a1a1a" translucent />

      {/* ── Splash Screen ─────────────────────────── */}
      {showSplash && (
        <Animated.View style={[styles.splash, { opacity: splashOpacity }]}>
          {/* Espaço no topo para descer o logo */}
          <View style={{ height: insets.top + 60 }} />

          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.tagline}>Guia de Máquinas 2026 | Ferrasoldas</Text>
          <ActivityIndicator
            size="small"
            color="#FFCC00"
            style={styles.spinner}
          />
        </Animated.View>
      )}

      {/* ── Conteúdo principal ────────────────────── */}
      {!showSplash && (
        <Animated.View style={[styles.content, { opacity: contentOpacity }]}>

          {/* Badge offline */}
          {!isOnline && (
            <View style={[styles.offlineBadge, { top: insets.top + 8 }]}>
              <Text style={styles.offlineBadgeText}>⚡ Sem conexão</Text>
            </View>
          )}

          {/* Loading overlay */}
          {webViewLoading && isOnline && (
            <View style={styles.loadingOverlay}>
              <Image
                source={require('./assets/logo.png')}
                style={styles.loadingLogo}
                resizeMode="contain"
              />
              <ActivityIndicator size="large" color="#FFCC00" />
              <Text style={styles.loadingText}>Carregando guia...</Text>
            </View>
          )}

          <WebView
            style={styles.webview}
            source={isOnline ? { uri: CATALOG_URL } : { html: offlineHTML }}
            onLoadStart={() => setWebViewLoading(true)}
            onLoadEnd={() => setWebViewLoading(false)}
            injectedJavaScript={injectedJS}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={false}
            scalesPageToFit={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentInset={{ bottom: insets.bottom }}
          />
        </Animated.View>
      )}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <CatalogApp />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },


  splash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 10,
  },
  logo: {
    width: 240,
    height: 90,
    marginBottom: 12,
  },
  tagline: {
    color: '#FFCC00',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
  spinner: {
    marginTop: 32,
  },


  content: {
    flex: 1,
    position: 'relative',
  },
  webview: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },


  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    zIndex: 5,
  },
  loadingLogo: {
    width: 160,
    height: 60,
  },
  loadingText: {
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
  },


  offlineBadge: {
    position: 'absolute',
    right: 12,
    backgroundColor: 'rgba(255,204,0,0.15)',
    borderWidth: 1,
    borderColor: '#FFCC00',
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
    zIndex: 10,
  },
  offlineBadgeText: {
    color: '#FFCC00',
    fontSize: 12,
    fontWeight: '600',
  },
});