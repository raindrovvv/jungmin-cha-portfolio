# Jungmin Cha

Game Audio Designer who codes.

I design sound for gameplay clarity and implement it end-to-end inside the engine: Wwise architecture, UE5 C++ / Blueprint, Physical Material footsteps, runtime occlusion, UI feedback, and playtest-driven audio QA.

## Featured

### Guardian & Seeker

4v1 asymmetrical PvP project presented for G-STAR 2025.

Audio implementation highlights:

- C++ audio component structure under `Source/GAS/Public/Sound/`
- `UGS_AudioComponentBase` as a shared `UActorComponent` base
- Monster / Seeker / UI audio systems separated by gameplay role
- Wwise RTPC references for distance, attenuation mode, and occlusion control
- Physical Material footsteps, Anim Notify timing, and Blueprint event integration
- 299 player test participants, 4.36 / 5 average rating

Direct code path:

https://github.com/raindrovvv/GuardianAndSeeker/tree/main/Source/GAS/Public/Sound

Portfolio:

https://jungmin-cha-portfolio.pages.dev/
