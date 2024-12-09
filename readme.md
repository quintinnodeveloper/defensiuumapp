> Configurar conta Github

    git config --global user.email "quintinno.developer@gmail.com"
    git config --global user.name "Quintinno"

> Adicionar Android ao projeto

    ionic capacitor add android
    ionic build
    ionic capacitor sync
    ionic capacitor open android
    ionic capacitor run android -l --emulator

> Configurar Android

    export ANDROID_HOME=$HOME/home/quintinno/Android/Sdk
    export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
    export ANDROID_SDK_ROOT=$ANDROID_HOME

> Configurar Gradle

    export GRADLE_HOME=/opt/gradle-8.11.1
    export PATH=$GRADLE_HOME/bin:$PATH

> Configurar Capacitor

    export PATH=$PATH:/usr/bin
    export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh

> Instalar Swiper

    npm install swiper
    npm install --save-dev @types/swiper
