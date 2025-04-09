{
  description = "A Nix-flake-based Node.js development environment";

  inputs = { nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs, ... }:
    let
      # system should match the system you are running on
      system = "x86_64-linux";
      # system = "x86_64-darwin";
    in {
      devShells."${system}".default =
        let pkgs = import nixpkgs { inherit system; };
        in pkgs.mkShell {

          packages = with pkgs; [
            typescript-language-server
            nodejs_20
            nodePackages.pnpm
          ];

          shellHook = ''
            echo "node `${pkgs.nodejs}/bin/node --version`"
          '';
        };
    };
}
