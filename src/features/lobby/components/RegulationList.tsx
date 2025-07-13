import { Separator } from "@/components/ui/separator";
import { renderElements } from "@/utils";

export const RegulationList = () => {
  const regulations = [
    {
      violation: "Ketidakhadiran dalam pelaksanaan program kerja (proker)",
      sanction: "Rp30.000",
    },
    {
      violation: "Ketidakhadiran saat jadwal piket",
      sanction: "Rp20.000",
    },
    {
      violation: "Tidak melakukan presensi harian pada pukul 09.00–13.00",
      sanction: "Rp10.000",
    },
    {
      violation: "Keterlambatan lebih dari 15 menit",
      sanction: "Rp5.000",
    },
    {
      violation: "Tidak hadir selama satu bulan penuh",
      sanction: "Rp1.500.000",
    },
  ];

  return (
    <div>
      <div className="space-y-1">
        <h4 className="leading-none font-medium">Catatan</h4>
        <div className="text-muted-foreground indent-1">
          <p>
            • Denda program kerja (proker) dibayarkan kepada penanggung jawab
            (PJ) sekretaris pada masing-masing bidang.
          </p>
          <p>
            • Denda harian dan piket dibayarkan kepada penanggung jawab (PJ)
            piket harian.
          </p>
        </div>
      </div>
      <Separator className="mt-4" />
      <div className="flex h-10 items-center space-x-4">
        <div className="w-full">Pelanggaran</div>
        <Separator orientation="vertical" />
        <div className="w-1/2 md:w-1/3 xl:w-1/4">Denda</div>
      </div>
      <Separator orientation="horizontal" />
      {renderElements({
        of: regulations,
        keyExtractor: (regulation) => regulation.violation,
        render: (regulation) => {
          return (
            <>
              <div className="flex h-10 items-center space-x-4">
                <div className="w-full truncate">{regulation.violation}</div>
                <Separator orientation="vertical" />
                <div className="w-1/2 truncate md:w-1/3 xl:w-1/4">
                  {regulation.sanction}
                </div>
              </div>
              <Separator orientation="horizontal" />
            </>
          );
        },
      })}
    </div>
  );
};
