{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_20
    jmeter
  ];

  shellHook = ''
    export PROJECT_ROOT="$PWD"
    export npm_config_cache="$PROJECT_ROOT/.npm_cache"
    export npm_config_prefix="$PROJECT_ROOT/.npm_global"
    export PATH="$PROJECT_ROOT/node_modules/.bin:$PATH"
    export PATH="$PROJECT_ROOT/.npm_global/bin:$PATH"
  '';
}
