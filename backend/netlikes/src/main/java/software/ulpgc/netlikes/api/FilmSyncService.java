package software.ulpgc.netlikes.api;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import software.ulpgc.netlikes.assembler.InitialFilmLoadService;

@Component
@EnableScheduling
@Slf4j
@RequiredArgsConstructor
public class FilmSyncScheduler {

    private final InitialFilmLoadService initialLoadService;
    // TODO: private final FilmSyncService syncService;  para el incremental diario

    @EventListener(ApplicationReadyEvent.class)
    public void onStartup() {
        log.info("Aplicación lista — comprobando si se necesita carga inicial...");
        initialLoadService.loadAll();
    }

    /* TODO: CADA DÍA a las 3:00 AM para sincronizar cambios
    @Scheduled(cron = "0 0 3 * * *")
    public void scheduledSync() {
        log.info("Iniciando sincronización incremental...");
        syncService.syncChanges();
    }*/
}